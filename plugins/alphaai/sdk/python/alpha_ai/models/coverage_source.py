from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .coverage_archive_days import CoverageArchiveDays, CoverageArchiveDaysDict
from .coverage_channel import CoverageChannel, CoverageChannelDict
from .enums.source import SourceOrStr


class CoverageSource(SdkBaseModel):
    source: SourceOrStr
    first_row_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Earliest row by the source's own clock (article publish time, filing acceptance time, scheduled date at 00:00
    UTC). The earliest row we hold, NOT the start of continuous coverage — see ``history_note``."""

    last_row_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Latest row by the same clock. For ``earnings_schedule`` and ``economic_calendar`` this reaches into the future
    (scheduled dates)."""

    last_ingested_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Arrival clock: when the newest row landed (``created_at``); for ``earnings_schedule`` the sync's last touch, for
    ``economic_calendar`` the last change to the calendar."""

    rows_total: int
    """Rows in the source's own unit: articles for ``publisher_news``, distinct filings (accession numbers) for
    ``sec_form4``, filings for ``sec_form8k`` / ``sec_form6k``, published reads for ``earnings_reads``, confirmed dates
    for ``earnings_schedule``, occurrences for ``economic_calendar``."""

    cadence: str
    """How and how often the source is collected, in plain words."""

    history_note: str
    """Where the history is thin or starts: the caveat you would otherwise discover by probing the feed."""

    limits: list[str]
    """Known scope limits of the source (what is deliberately not collected)."""

    archive_days: OptionalNullable[CoverageArchiveDays] = UNSET
    """How far back a key on each plan can page the news feeds into this source's rows; ``null`` where the archive gate
    does not apply (``earnings_reads``, ``earnings_schedule``, ``economic_calendar`` are served by endpoints that page
    back freely)."""

    stale: bool
    """``true`` when ``last_ingested_at`` is older than ``stale_after_seconds``, or — for ``economic_calendar``, where
    ``stale_after_seconds`` is null — when no future occurrence is held. An honest flag, not an alert."""

    stale_after_seconds: OptionalNullable[int] = UNSET
    """The horizon ``stale`` keys on: six poll cycles for the collectors, three days for SEC filings, ten days for
    earnings reads; ``null`` for the economic calendar."""

    channels: OptionalNullable[list[CoverageChannel]] = UNSET
    """Only on ``publisher_news`` — the two discovery channels."""


class CoverageSourceDict(TypedDict):
    source: SourceOrStr
    first_row_at: NotRequired[RFC3339DateTime | None]
    last_row_at: NotRequired[RFC3339DateTime | None]
    last_ingested_at: NotRequired[RFC3339DateTime | None]
    rows_total: int
    cadence: str
    history_note: str
    limits: list[str]
    archive_days: NotRequired[CoverageArchiveDaysDict | None]
    stale: bool
    stale_after_seconds: NotRequired[int | None]
    channels: NotRequired[list[CoverageChannelDict] | None]
