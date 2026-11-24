from __future__ import annotations

from typing import TypeAlias

from ...core import Date

DateRange: TypeAlias = str | list[Date]
"""A scalar string — a preset (``7d``/``30d`` = last N full days; ``month`` = current calendar month to date;
``realtime`` = last ~30 min) or a bare ``Nd`` for the last N days, N in 1–90 (e.g. ``14d``) — OR a custom inclusive
``[from, to]`` pair of ``YYYY-MM-DD`` dates with ``from <= to`` and a span of at most 366 days. The scalar forms are
exactly what ``GET /sites`` accepts; for a window over 90 days use a custom pair."""

DateRangeDict: TypeAlias = str | list[Date]
