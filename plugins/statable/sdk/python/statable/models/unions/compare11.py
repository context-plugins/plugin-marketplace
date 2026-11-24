from __future__ import annotations

from typing import TypeAlias

from ...core import Date
from ..enums.compare1 import Compare1OrStr

Compare11: TypeAlias = Compare1OrStr | list[Date]
"""``"previous_period"`` (equal-length window before date_range) or a custom ``["YYYY-MM-DD","YYYY-MM-DD"]`` pair. Adds
a ``compare`` {value, change%} block — per metric (aggregate), per row (breakdown, each row's true previous value; not
on event:status_code/event:goal), or per bucket (time-series) — plus ``compare_date_range`` to the query echo. The
compare range must be the same length as date_range (``previous_period`` always is) → an unequal custom pair yields
``compare_length_mismatch``."""

Compare11Dict: TypeAlias = Compare1OrStr | list[Date]
