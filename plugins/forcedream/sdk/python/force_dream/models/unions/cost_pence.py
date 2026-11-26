from __future__ import annotations

from typing import TypeAlias

CostPence: TypeAlias = float | str
"""Real-world value is numeric but may arrive as a JSON string; coerce with Number(x) semantics before
canonicalizing."""

CostPenceDict: TypeAlias = float | str
