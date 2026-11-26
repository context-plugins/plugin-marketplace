from __future__ import annotations

from typing import TypeAlias

CompletedAt: TypeAlias = float | str
"""Coerced to a string exactly as JS's String(x) would, not left as a raw number."""

CompletedAtDict: TypeAlias = float | str
