from __future__ import annotations

from typing import TypeAlias

from ...core import Date, RFC3339DateTime

Until: TypeAlias = Date | RFC3339DateTime

UntilDict: TypeAlias = Date | RFC3339DateTime
