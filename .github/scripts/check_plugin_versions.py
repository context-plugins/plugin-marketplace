#!/usr/bin/env python3
"""
Checks that every touched plugin's `version` was genuinely bumped.

Every plugin carries the same `version` in `plugin.json`, `.claude-plugin/plugin.json`, and
`.cursor-plugin/plugin.json` (see CLAUDE.md's "Per-IDE manifest convention"). A commit or PR that
touches a plugin is supposed to bump that version in all three manifests. This script fails the
build instead of fixing anything up, so a bad version never lands:

  1. For each plugin whose directory changed between BASE_SHA and HEAD, read the version each of
     the three manifests declares now, and what they declared at BASE_SHA.
  2. All present manifests must declare the same version now — a bump applied to only some of the
     three files is an error, not something to sync silently.
  3. If the plugin existed at BASE_SHA, the new version must be a genuine semver increase over the
     highest version declared there (0.1.0 -> 0.1.1 or 0.1.0 -> 1.2.3 are valid; 0.1.3 -> 0.1.0 or
     0.1.3 -> 0.1.3 are not).

A plugin with no BASE_SHA history (new in this push/PR) has nothing to compare against, so step 3
is skipped — it only needs to satisfy step 2.

This script never writes to the manifests or to git; it only inspects them and exits non-zero on
any problem.
"""
from __future__ import annotations

import json
import os
import pathlib
import re
import subprocess
import sys

REPO_ROOT = pathlib.Path(__file__).resolve().parents[2]
PLUGINS_DIR = REPO_ROOT / "plugins"
ZERO_SHA = "0" * 40

MANIFEST_LABELS = ("plugin.json", ".claude-plugin/plugin.json", ".cursor-plugin/plugin.json")

VERSION_RE = re.compile(
    r"^v?(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?(?:\+[0-9A-Za-z.-]+)?$"
)


def parse_version(raw: str):
    m = VERSION_RE.match(raw.strip())
    if not m:
        return None
    major, minor, patch, pre = m.groups()
    pre_ids = tuple(pre.split(".")) if pre else None
    return (int(major), int(minor), int(patch), pre_ids)


def _pre_key(ident: str):
    return (0, int(ident)) if ident.isdigit() else (1, ident)


def compare_versions(a, b) -> int:
    """Semver precedence: numeric core first, then pre-release (absent beats present)."""
    if a[:3] != b[:3]:
        return -1 if a[:3] < b[:3] else 1
    a_pre, b_pre = a[3], b[3]
    if a_pre is None and b_pre is None:
        return 0
    if a_pre is None:
        return 1
    if b_pre is None:
        return -1
    ak, bk = [_pre_key(x) for x in a_pre], [_pre_key(x) for x in b_pre]
    if ak == bk:
        return 0
    return -1 if ak < bk else 1


def max_version(raw_versions):
    """Highest of a set of raw version strings, or None if none parse as semver."""
    best_raw, best_parsed = None, None
    for raw in raw_versions:
        parsed = parse_version(raw)
        if parsed is None:
            continue
        if best_parsed is None or compare_versions(parsed, best_parsed) > 0:
            best_raw, best_parsed = raw, parsed
    return best_raw


def git_show(ref: str, relpath: str):
    result = subprocess.run(
        ["git", "show", f"{ref}:{relpath}"],
        cwd=REPO_ROOT, capture_output=True, text=True,
    )
    return result.stdout if result.returncode == 0 else None


def changed_plugin_ids(base_sha: str) -> list[str]:
    result = subprocess.run(
        ["git", "diff", "--name-only", base_sha, "HEAD", "--", "plugins"],
        cwd=REPO_ROOT, capture_output=True, text=True, check=True,
    )
    ids = set()
    for line in result.stdout.splitlines():
        parts = line.split("/")
        if len(parts) >= 2 and parts[0] == "plugins":
            ids.add(parts[1])
    return sorted(ids)


def check_plugin(plugin_id: str, base_sha: str, problems: list[str], report: list[str]) -> None:
    root = PLUGINS_DIR / plugin_id
    current = {}  # label -> raw version string

    for label in MANIFEST_LABELS:
        path = root / label
        if not path.is_file():
            continue
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            problems.append(f"{plugin_id}: cannot parse {label}: {e}")
            continue
        version = data.get("version")
        if not version:
            problems.append(f"{plugin_id}: {label} has no 'version' field")
            continue
        current[label] = version

    if not current:
        return

    distinct = set(current.values())
    if len(distinct) > 1:
        problems.append(f"{plugin_id}: manifests disagree on version: {current}")
        return

    candidate_raw = next(iter(distinct))
    candidate = parse_version(candidate_raw)
    if candidate is None:
        problems.append(f"{plugin_id}: '{candidate_raw}' is not a valid semver version")
        return

    baseline = {}
    for label in MANIFEST_LABELS:
        content = git_show(base_sha, f"plugins/{plugin_id}/{label}")
        if content is None:
            continue
        try:
            data = json.loads(content)
        except json.JSONDecodeError:
            continue
        version = data.get("version")
        if version:
            baseline[label] = version

    if not baseline:
        report.append(f"{plugin_id}: new plugin at {candidate_raw} — nothing to compare")
        return

    prev_raw = max_version(baseline.values())
    prev = parse_version(prev_raw) if prev_raw else None
    if prev is None:
        report.append(f"{plugin_id}: no parseable previous version — nothing to compare")
        return

    if compare_versions(candidate, prev) > 0:
        report.append(f"{plugin_id}: OK ({prev_raw} -> {candidate_raw})")
    else:
        problems.append(
            f"{plugin_id}: version {candidate_raw} is not an increase over previous version {prev_raw}"
        )


def main() -> int:
    base_sha = os.environ.get("BASE_SHA", "").strip()
    if not base_sha or base_sha == ZERO_SHA:
        print("No usable base commit (new branch, or none given) — skipping version check.")
        return 0
    if subprocess.run(["git", "cat-file", "-e", base_sha], cwd=REPO_ROOT).returncode != 0:
        print(f"Base commit {base_sha} not found in this checkout — skipping.", file=sys.stderr)
        return 0

    plugin_ids = [p for p in changed_plugin_ids(base_sha) if (PLUGINS_DIR / p).is_dir()]
    if not plugin_ids:
        print("No plugin directories changed — nothing to check.")
        return 0

    problems: list[str] = []
    report: list[str] = []
    for plugin_id in plugin_ids:
        check_plugin(plugin_id, base_sha, problems, report)

    print(f"Checked {len(plugin_ids)} plugin(s):")
    for line in report:
        print(f"  - {line}")
    for problem in problems:
        print(f"  ! {problem}", file=sys.stderr)

    if problems:
        print(f"\n{len(problems)} plugin version problem(s) found.", file=sys.stderr)
        return 1

    print("All plugin versions OK.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
