#!/usr/bin/env python3
"""
Backfills TODO_AUTO_DESCRIPTION placeholders with a Gemini-generated one-line description.

Scans every plugin under plugins/*/.claude-plugin/plugin.json (the canonical manifest — edit
THAT file's description by hand if you want to freeze one) for the sentinel below. For each match,
asks Gemini for a short generic description of the named API and, if the response validates,
writes the identical line into all five places the description lives:
  plugins/{name}/.claude-plugin/plugin.json
  plugins/{name}/plugin.json
  plugins/{name}/.cursor-plugin/plugin.json
  .claude-plugin/marketplace.json  (the "plugins" entry named {name})
  .cursor-plugin/marketplace.json  (the "plugins" entry named {name})

Only ever mutates existing files; never creates or deletes one, and never touches anything for a
plugin whose call failed or returned something unusable. This script does not touch git — the
workflow step after it decides whether there is anything to commit.

Idempotent: a plugin whose canonical manifest no longer starts with the sentinel (backfilled, or
hand-edited by a human) is not touched again.
"""
import json
import os
import re
import sys
import urllib.error
import urllib.request

# Keep this in sync with DESCRIPTION_PLACEHOLDER_PREFIX in contextmatic-crawler's generate_plugin.py —
# that crawler repo defines the sentinel; this workflow is just the consumer.
SENTINEL_PREFIX = "TODO_AUTO_DESCRIPTION: "

MAX_DESCRIPTION_LENGTH = 200
MODEL = os.environ.get("GEMINI_MODEL", "gemini-3.5-flash-lite")
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PLUGINS_DIR = os.path.join(REPO_ROOT, "plugins")
REGISTRY_PATHS = [
    os.path.join(REPO_ROOT, ".claude-plugin", "marketplace.json"),
    os.path.join(REPO_ROOT, ".cursor-plugin", "marketplace.json"),
]
SUMMARY_PATH = os.path.join(os.environ.get("RUNNER_TEMP", "/tmp"), "backfilled-plugins.txt")


def manifest_paths(plugin_name):
    base = os.path.join(PLUGINS_DIR, plugin_name)
    return [
        os.path.join(base, ".claude-plugin", "plugin.json"),
        os.path.join(base, "plugin.json"),
        os.path.join(base, ".cursor-plugin", "plugin.json"),
    ]


def read_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def write_json_atomic(path, data):
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    os.replace(tmp, path)


def find_pending_plugins():
    """{plugin_name: api_name} for every plugin whose canonical manifest still carries the sentinel."""
    pending = {}
    if not os.path.isdir(PLUGINS_DIR):
        return pending
    for name in sorted(os.listdir(PLUGINS_DIR)):
        canonical = os.path.join(PLUGINS_DIR, name, ".claude-plugin", "plugin.json")
        if not os.path.isfile(canonical):
            continue
        try:
            data = read_json(canonical)
        except (json.JSONDecodeError, OSError) as exc:
            print(f"[{name}] could not read canonical manifest, skipping: {exc}", file=sys.stderr)
            continue
        desc = data.get("description", "")
        if isinstance(desc, str) and desc.startswith(SENTINEL_PREFIX):
            api_name = desc[len(SENTINEL_PREFIX):].strip()
            api_name = re.sub(r"\s+API$", "", api_name).strip()
            pending[name] = api_name or data.get("displayName", name)
    return pending


def call_gemini(api_name, api_key):
    prompt = (
        f'Write ONE short description of the "{api_name}" API/service, matching the style of these '
        "examples:\n"
        '- "Upload, manage, and stream video content on Vimeo."\n'
        '- "Cloud accounting software for invoicing, payroll, expenses, and bookkeeping."\n'
        '- "Read and write pages, databases, and blocks in Notion workspaces."\n\n'
        'Open with an active verb (e.g. "Manage", "Send", "Track", "Book") or a short noun phrase '
        f'naming the category (e.g. "Cloud accounting software for..."). Do not start with "The '
        f'{api_name} API" or similar, and do not use words like "enables", "allows", or "provides". '
        "No marketing language, no quotation marks around the output, no newlines. Output only the "
        "sentence, nothing else."
    )
    body = json.dumps(
        {
            "systemInstruction": {
                "parts": [
                    {
                        "text": "You write short, punchy one-line descriptions for a developer tool "
                        "marketplace, leading with an active verb or a concise noun phrase naming the "
                        "category rather than a dry '<Name> API' preamble."
                    }
                ]
            },
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"maxOutputTokens": 80, "temperature": 0.3},
        }
    ).encode("utf-8")
    req = urllib.request.Request(
        GEMINI_URL,
        data=body,
        headers={"x-goog-api-key": api_key, "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        payload = json.loads(resp.read().decode("utf-8"))
    return payload["candidates"][0]["content"]["parts"][0]["text"]


def validate(text):
    if not isinstance(text, str):
        return None
    line = text.strip()
    if line.startswith('"') and line.endswith('"') and len(line) > 1:
        line = line[1:-1].strip()
    if not line or "\n" in line or "\r" in line:
        return None
    if len(line) > MAX_DESCRIPTION_LENGTH:
        return None
    if SENTINEL_PREFIX in line:
        return None
    return line


def apply_description(plugin_name, description):
    changed = []
    for path in manifest_paths(plugin_name):
        if not os.path.isfile(path):
            continue
        data = read_json(path)
        if data.get("description") == description:
            continue
        data["description"] = description
        write_json_atomic(path, data)
        changed.append(path)

    for reg_path in REGISTRY_PATHS:
        if not os.path.isfile(reg_path):
            continue
        data = read_json(reg_path)
        touched = False
        for entry in data.get("plugins", []):
            if entry.get("name") == plugin_name and entry.get("description") != description:
                entry["description"] = description
                touched = True
        if touched:
            write_json_atomic(reg_path, data)
            changed.append(reg_path)

    return changed


def main():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY not set; nothing to do.", file=sys.stderr)
        return 0

    pending = find_pending_plugins()
    if not pending:
        print("No TODO_AUTO_DESCRIPTION placeholders found. Nothing to backfill.")
        return 0

    print(f"{len(pending)} plugin(s) pending a description: {', '.join(pending)}")

    backfilled = []
    for plugin_name, api_name in pending.items():
        try:
            raw = call_gemini(api_name, api_key)
            description = validate(raw)
            if description is None:
                print(f"[{plugin_name}] response failed validation, leaving placeholder in place.", file=sys.stderr)
                continue
            changed = apply_description(plugin_name, description)
        except Exception as exc:  # one bad API for one plugin must never block the rest
            print(f"[{plugin_name}] backfill failed, leaving placeholder in place: {exc}", file=sys.stderr)
            continue

        if changed:
            backfilled.append(plugin_name)
            print(f"[{plugin_name}] -> {description!r} ({len(changed)} file(s) updated)")

    if backfilled:
        with open(SUMMARY_PATH, "w", encoding="utf-8") as f:
            f.write("\n".join(backfilled) + "\n")
        print(f"Backfilled {len(backfilled)} plugin(s): {', '.join(backfilled)}")
    else:
        print("No plugin backfilled successfully this run.")

    return 0


if __name__ == "__main__":
    sys.exit(main())
