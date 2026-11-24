from __future__ import annotations

from typing import TypeAlias

from ...core import Date

Value: TypeAlias = Date | list[Date] | list[str] | str

ValueDict: TypeAlias = Date | list[Date] | list[str] | str
