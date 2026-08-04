#!/usr/bin/env python3
"""
Makes the marketplace's derived copies agree with what is actually on disk.

`plugins/` is the only source of truth. A plugin exists because its folder exists; everything
else — the two root registries and the counts/table in the root docs — is a copy of that fact,
and every drift this repo has hit was a copy disagreeing with the folders. So this script never
invents anything: it reads `plugins/`, then rewrites the copies to match.

Four things, in this order:

  1. Prune orphans   registry entry whose `plugins/<id>/` is gone (a delete, or the losing half
                     of a rename — `upsert_marketplace` in contextmatic-crawler's
                     generate_plugin.py matches by name, so renaming leaves the old id behind
                     forever). An orphan is worse than cosmetic: `npx context-plugins list`
                     prints the registry verbatim, so the CLI advertises a plugin whose folder
                     404s at install time.
  2. Adopt strays    `plugins/<id>/` with no entry in a registry. The plugin is fully built and
                     completely invisible to users, with nothing anywhere reporting a problem.
                     Also repairs the half-applied edit — registered in .claude-plugin but not
                     .cursor-plugin — which otherwise shows the plugin to Claude Code users and
                     hides it from Cursor users, silently, because the CLI reads whichever file
                     matches the IDE.
  3. Docs            the plugin table and every count in README.md / CLAUDE.md, recomputed from
                     the tree and written between `<!-- BEGIN:X -->`/`<!-- END:X -->` markers so
                     hand-written prose around them survives untouched.
  4. --check         same reads, no writes, one line per problem, non-zero exit. For pull
                     requests: the exit code blocks the merge, the printed lines say why.

Idempotent — a run that finds nothing to do writes nothing, so the workflow's "is anything
dirty?" test is a reliable "did this change something?".
"""
from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys

REPO_ROOT = pathlib.Path(__file__).resolve().parents[2]
PLUGINS_DIR = REPO_ROOT / "plugins"
REGISTRIES = (
    REPO_ROOT / ".claude-plugin" / "marketplace.json",
    REPO_ROOT / ".cursor-plugin" / "marketplace.json",
)

# Keep in sync with DESCRIPTION_PLACEHOLDER_PREFIX in contextmatic-crawler's generate_plugin.py.
# Only used when adopting a stray whose manifest has no description at all; writing the sentinel
# hands the plugin to backfill_descriptions.py instead of inventing prose here.
SENTINEL_PREFIX = "TODO_AUTO_DESCRIPTION: "

# Display labels for the README's Languages column. Order is the canonical language order used
# across the marketplace, not alphabetical, so rows read consistently.
LANGUAGE_LABELS = {
    "dotnet": ".NET",
    "typescript": "TS",
    "java": "Java",
    "php": "PHP",
    "python": "Python",
    "ruby": "Ruby",
    "go": "Go",
}
LANGUAGE_ORDER = list(LANGUAGE_LABELS)

# These are plugins, not SDKs, so the API column drops the " SDK" the crawler appends to every
# displayName (generate_plugin.py: `args.display_name or f"{args.api_name} SDK"`). Note this only
# cleans up the README — the IDE plugin picker reads displayName straight out of the plugin's
# manifest, so "paypal SDK" is still what Claude Code and Cursor show until the crawler's default
# changes. That is a crawler fix, not one this repo can make.
SDK_SUFFIX = re.compile(r"\s+SDK\s*$", re.IGNORECASE)

# Capitalisation the spec titles get wrong. A word is only capitalised when it is entirely
# lowercase (see friendly_name), which correctly leaves NYTimes/API/PokeApi alone but cannot
# recover a capital in the MIDDLE of a word — no rule can infer PayPal from "paypal". Keyed by
# plugin id, and deliberately tiny: add an entry only for a brand whose own casing is irregular.
BRAND_NAMES = {
    "paypal": "PayPal",
    "cellpoint": "CellPoint",
    "ebay-sell": "eBay Sell",
}


def friendly_name(plugin_id: str, display_name: str) -> str:
    """The API column: a human label for the API, without the SDK framing.

    `str.title()` is the trap here — it lowercases the rest of every word, which would turn
    "NYTimes SDK" into "Nytimes Sdk" and "Spotify Web API SDK" into "Spotify Web Api Sdk",
    damaging 25 of the 25 names it was meant to help. Capitalising only all-lowercase words fixes
    the genuinely broken ones (paypal, klarna, sportsdata) and touches nothing else.

    Words containing a digit are left alone too: they are version tokens, and "X API v2" reads
    correctly while "X API V2" does not.
    """
    if plugin_id in BRAND_NAMES:
        return BRAND_NAMES[plugin_id]
    stripped = SDK_SUFFIX.sub("", display_name).strip() or display_name
    return " ".join(
        w.capitalize() if w.islower() and not any(c.isdigit() for c in w) else w
        for w in stripped.split()
    )


# --------------------------------------------------------------------------------------
# Reading the truth
# --------------------------------------------------------------------------------------
class Plugin:
    """One `plugins/<id>/` folder, and the facts the copies need from it."""

    def __init__(self, path: pathlib.Path):
        self.name = path.name
        self.path = path
        manifest = path / ".claude-plugin" / "plugin.json"
        data = json.loads(manifest.read_text(encoding="utf-8")) if manifest.is_file() else {}
        # The canonical manifest is the one humans edit to freeze a description; the other two
        # are copies of it (see backfill_descriptions.py).
        self.display_name = data.get("displayName") or self.name
        self.friendly_name = friendly_name(self.name, self.display_name)
        self.description = data.get("description") or ""
        skills = path / "skills"
        found = [d.name for d in skills.iterdir() if d.is_dir()] if skills.is_dir() else []
        # Unknown languages sort last rather than being dropped: a new language should show up in
        # the table as itself, not vanish because this map predates it.
        self.languages = sorted(
            found, key=lambda l: (LANGUAGE_ORDER.index(l) if l in LANGUAGE_ORDER else len(LANGUAGE_ORDER), l)
        )
        self.skill_count = len(list(skills.rglob("SKILL.md"))) if skills.is_dir() else 0

    @property
    def language_labels(self) -> list[str]:
        return [LANGUAGE_LABELS.get(l, l) for l in self.languages]


def discover_plugins() -> dict[str, Plugin]:
    if not PLUGINS_DIR.is_dir():
        return {}
    return {d.name: Plugin(d) for d in sorted(PLUGINS_DIR.iterdir()) if d.is_dir()}


# --------------------------------------------------------------------------------------
# Registries
# --------------------------------------------------------------------------------------
def read_json(path: pathlib.Path):
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: pathlib.Path, data) -> None:
    # Same shape generate_plugin.py and backfill_descriptions.py write, so a sync never shows up
    # as a whitespace-only diff against their output.
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    tmp.replace(path)


def claims_local_folder(entry: dict) -> bool:
    """Does this entry promise a `plugins/<id>/` inside THIS repo?

    Mirrors sourcePathFor() in the installer (context-plugins-installer, src/catalog.js:86-99),
    which resolves an entry's files three ways:
      - `source` is a string  -> that repo-relative path
      - `source` is absent    -> defaults to `plugins/<name>`   <- still local
      - `source` is an object -> the plugin lives in ANOTHER repository
    Only the first two can be judged by looking for a local folder. An object source never
    claimed one, so a missing folder says nothing about it and pruning it would delete a valid
    entry. There are none in this repo today; this keeps a future one safe.
    """
    source = entry.get("source")
    if isinstance(source, dict):
        return False
    return True


def folder_for(entry: dict) -> str:
    source = entry.get("source")
    if isinstance(source, str) and source.strip():
        rel = source.strip().lstrip("./").rstrip("/")
        if rel:
            return rel
    return f"plugins/{entry.get('name')}"


def sync_registry(path: pathlib.Path, plugins: dict[str, Plugin], problems: list[str], fix: bool) -> bool:
    """Prune orphans + adopt strays in one registry. Returns True if it changed (or would)."""
    if not path.is_file():
        problems.append(f"missing registry: {path.relative_to(REPO_ROOT).as_posix()}")
        return False

    data = read_json(path)
    entries = data.get("plugins")
    if not isinstance(entries, list):
        problems.append(f"{path.relative_to(REPO_ROOT).as_posix()}: no 'plugins' array")
        return False

    rel = path.relative_to(REPO_ROOT).as_posix()
    kept: list = []
    changed = False

    for entry in entries:
        # A bare string entry is legal in the schema (the installer handles it) and names a
        # plugin with no explicit source, so treat it as claiming plugins/<name>.
        name = entry if isinstance(entry, str) else entry.get("name")
        as_dict = {"name": name} if isinstance(entry, str) else entry
        if not name:
            problems.append(f"{rel}: entry with no name — {entry!r}")
            kept.append(entry)
            continue
        if not claims_local_folder(as_dict):
            kept.append(entry)  # hosted elsewhere; not ours to judge
            continue
        if not (REPO_ROOT / folder_for(as_dict)).is_dir():
            problems.append(f"orphan: '{name}' in {rel} — {folder_for(as_dict)}/ does not exist")
            changed = True
            continue  # dropped
        kept.append(entry)

    # Adopt strays, appended in name order. Appending (rather than re-sorting the whole file)
    # keeps the diff to the lines that actually changed and matches how the crawler's
    # upsert_marketplace grows the file.
    listed = {e if isinstance(e, str) else e.get("name") for e in kept}
    for name in sorted(set(plugins) - {n for n in listed if n}):
        plugin = plugins[name]
        kept.append({
            "name": name,
            "source": f"./plugins/{name}",
            "description": plugin.description or f"{SENTINEL_PREFIX}{name} API",
        })
        problems.append(f"stray: '{name}' has plugins/{name}/ but no entry in {rel}")
        changed = True

    if changed and fix:
        data["plugins"] = kept
        write_json(path, data)
    return changed


# --------------------------------------------------------------------------------------
# Docs
# --------------------------------------------------------------------------------------
def render_table(plugins: dict[str, Plugin]) -> str:
    lines = ["| Plugin | API | Languages |", "| --- | --- | --- |"]
    for name, plugin in sorted(plugins.items()):
        langs = ", ".join(plugin.language_labels) or "—"
        lines.append(f"| [`{name}`](plugins/{name}/) | {plugin.friendly_name} | {langs} |")
    return "\n".join(lines)


def marker_values(plugins: dict[str, Plugin]) -> dict[str, str]:
    return {
        "PLUGIN_COUNT": str(len(plugins)),
        "PLUGIN_TABLE": render_table(plugins),
        "LANGUAGE_PACK_COUNT": str(sum(len(p.languages) for p in plugins.values())),
        "SKILL_COUNT": f"{sum(p.skill_count for p in plugins.values()):,}",
    }


def apply_markers(text: str, values: dict[str, str], rel: str, problems: list[str]) -> str:
    """Replace every `<!-- BEGIN:X -->…<!-- END:X -->` region with values[X].

    Every occurrence is replaced, so the same marker can appear as many times as the prose needs
    (the plugin count is stated more than once). A marker with no value is left alone and
    reported rather than blanked — a typo should be loud, not silently erase a section.
    """
    def replace(match: re.Match) -> str:
        key, inner = match.group("key"), match.group("inner")
        if key not in values:
            problems.append(f"{rel}: unknown marker '{key}'")
            return match.group(0)
        value = values[key]
        # Block content (a table) sits on its own lines; a bare number stays inline so it can be
        # wrapped in bold or dropped mid-sentence.
        body = f"\n{value}\n" if "\n" in value else value
        if inner == body:
            return match.group(0)
        return f"<!-- BEGIN:{key} -->{body}<!-- END:{key} -->"

    return re.sub(
        r"<!-- BEGIN:(?P<key>[A-Z_]+) -->(?P<inner>.*?)<!-- END:\1 -->",
        replace,
        text,
        flags=re.DOTALL,
    )


def sync_doc(path: pathlib.Path, values: dict[str, str], problems: list[str], fix: bool) -> bool:
    if not path.is_file():
        return False
    rel = path.relative_to(REPO_ROOT).as_posix()
    original = path.read_text(encoding="utf-8")
    updated = apply_markers(original, values, rel, problems)
    if updated == original:
        return False
    problems.append(f"stale generated content in {rel}")
    if fix:
        path.write_text(updated, encoding="utf-8")
    return True


# --------------------------------------------------------------------------------------
def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--check",
        action="store_true",
        help="report drift and exit non-zero; write nothing (for pull requests)",
    )
    args = parser.parse_args()
    fix = not args.check

    plugins = discover_plugins()
    if not plugins:
        print("No plugins/ directory or no plugins in it — nothing to sync.", file=sys.stderr)
        return 1

    problems: list[str] = []
    changed = False
    for registry in REGISTRIES:
        changed |= sync_registry(registry, plugins, problems, fix)
    values = marker_values(plugins)
    for doc in (REPO_ROOT / "README.md", REPO_ROOT / "CLAUDE.md"):
        changed |= sync_doc(doc, values, problems, fix)

    if args.check:
        if problems:
            print(f"Marketplace is out of sync with plugins/ ({len(plugins)} plugins on disk):\n")
            for p in problems:
                print(f"  x {p}")
            print("\nRun: python3 .github/scripts/sync_marketplace.py")
            return 1
        print(f"In sync: {len(plugins)} plugins, both registries, README.md, CLAUDE.md.")
        return 0

    for p in problems:
        print(f"  - {p}")
    print(
        f"{'Synced' if changed else 'Already in sync'}: {len(plugins)} plugins, "
        f"{values['LANGUAGE_PACK_COUNT']} language packs, {values['SKILL_COUNT']} skills."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
