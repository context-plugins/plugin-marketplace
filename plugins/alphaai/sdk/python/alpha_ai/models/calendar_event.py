from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.event_key import EventKeyOrStr
from .enums.importance import ImportanceOrStr
from .enums.news_category import NewsCategoryOrStr
from .enums.phase import PhaseOrStr
from .enums.schedule_basis import ScheduleBasisOrStr
from .enums.schedule_status import ScheduleStatusOrStr


class CalendarEvent(SdkBaseModel):
    """One scheduled occurrence of a US macro release. ``uid`` is a stable, opaque occurrence id — reschedules update
    the row in place, so the uid is safe to store and link. ``phase`` is computed against request time and only says
    whether the scheduled moment passed; check ``schedule_status`` first (a ``cancelled`` row's phase is
    meaningless)."""

    uid: Optional[str] = UNSET
    event_key: Optional[EventKeyOrStr] = UNSET
    title: Optional[str] = UNSET
    reference_period: Optional[str] = UNSET
    """What the release covers, machine-readable: a month (``2026-07``), a quarter (``2026-Q2``), or — for weekly claims
    — the reference week-ending Saturday (``2026-07-25``)."""

    release_stage: OptionalNullable[str] = UNSET
    """GDP only — ``advance``, ``second`` or ``third``; null elsewhere."""

    scheduled_at: Optional[RFC3339DateTime] = UNSET
    """Official release moment (UTC; 08:30 / 10:00 / 14:00 ET converted)."""

    phase: Optional[PhaseOrStr] = UNSET
    schedule_status: Optional[ScheduleStatusOrStr] = UNSET
    schedule_basis: Optional[ScheduleBasisOrStr] = UNSET
    """``official``: the date is printed on the agency's own schedule page. ``inferred``: derived from the documented
    publication cadence — weekly jobless claims (DOL publishes no forward schedule) and FOMC minutes dates the Fed has
    not printed yet (three weeks after the meeting). Inferred dates flip to official once the agency lists them."""

    importance: Optional[ImportanceOrStr] = UNSET
    category: Optional[NewsCategoryOrStr] = UNSET
    """``market_movers`` is for articles whose subject IS a notable price move ("AMD up 5% today"); ``sector_analysis``
    is genuine sector-level analysis; ``insider`` covers SEC Form 4 insider transactions only. SEC 8-K filings
    categorize by their primary item: an earnings release (Item 2.02) is ``earnings``, a completed acquisition or
    disposition (Item 2.01) is ``mergers_acquisitions``, and the remaining events (material agreements, debt, executive
    changes, annual-meeting results, and since 2026-09-17 securities offerings, Regulation FD disclosures and other
    events under Items 7.01/8.01) are ``corporate_actions``. A foreign private issuer's SEC 6-K appears only when it is
    an earnings release (``source`` "SEC EDGAR 6-K") and is always ``earnings``."""

    country: Optional[str] = UNSET
    source_url: Optional[str] = UNSET
    """The agency's own schedule page for the series."""

    press_conference_at: OptionalNullable[RFC3339DateTime] = UNSET
    """FOMC decisions only — the 14:30 ET press conference; null elsewhere."""

    has_sep: Optional[bool] = UNSET
    """FOMC decisions only — true when the meeting carries a Summary of Economic Projections (the "dot plot")."""


class CalendarEventDict(TypedDict):
    uid: NotRequired[str]
    event_key: NotRequired[EventKeyOrStr]
    title: NotRequired[str]
    reference_period: NotRequired[str]
    release_stage: NotRequired[str | None]
    scheduled_at: NotRequired[RFC3339DateTime]
    phase: NotRequired[PhaseOrStr]
    schedule_status: NotRequired[ScheduleStatusOrStr]
    schedule_basis: NotRequired[ScheduleBasisOrStr]
    importance: NotRequired[ImportanceOrStr]
    category: NotRequired[NewsCategoryOrStr]
    country: NotRequired[str]
    source_url: NotRequired[str]
    press_conference_at: NotRequired[RFC3339DateTime | None]
    has_sep: NotRequired[bool]
