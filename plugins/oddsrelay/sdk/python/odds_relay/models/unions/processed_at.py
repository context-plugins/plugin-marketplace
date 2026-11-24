from __future__ import annotations

from typing import TypeAlias

ProcessedAt: TypeAlias = str | int
"""ISO-8601 UTC, or epoch seconds under ``dateFormat=unix``."""

ProcessedAtDict: TypeAlias = str | int
