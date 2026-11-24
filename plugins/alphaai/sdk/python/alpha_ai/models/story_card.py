from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.summary_state import SummaryStateOrStr


class StoryCard(SdkBaseModel):
    """A story in a list (``/api/stories/top/``, ``/api/stories/``): the summary's title and lead, the story's
    importance, breadth and timing."""

    story_id: str
    """Permanent story key — the ``uid`` of the story's first root article; the same value article rows carry in their
    ``story_id``. Opens ``/api/stories/{story_id}/``."""

    title: str
    """The summary's headline, written by AlphAI from the articles. In ``preparing`` state, the lead article's own
    headline."""

    summary: str
    """One paragraph: what happened, with the figures. In ``preparing`` state, the lead article's collector summary."""

    importance: int
    """How much the event matters, on the feed's 1-10 relevance scale: the median of each publisher's best-scored
    article on the event, rounded down — so one outlet's 9 does not lift a story every other outlet scored 7. Stories
    below 7 are not listed and carry no summary."""

    category: str
    """The feed category of the story's root article (same 14 values as ``enrichment.category``)."""

    tickers: list[str]
    """Active tickers the story's articles are tagged with. Macro stories carry an empty list."""

    publishers: int
    """Distinct publishers (source domains) covering the story — always 2 or more."""

    materials: int
    """Articles in the story that the feed shows (``relevance_score >= 4``), reprints included."""

    first_published_at: RFC3339DateTime | None
    """Publication time of the story's earliest article."""

    last_material_at: RFC3339DateTime | None
    """Publication time of the story's latest article; ``/api/stories/`` is ordered by it."""

    updated_at: RFC3339DateTime | None
    """When the story's key facts last changed — a rewrite that only reworded the summary does not move it. The
    freshness Top stories rank by."""

    summary_state: SummaryStateOrStr
    """``published``: the summary covers every article the story had when it was written. ``stale``: articles joined
    since; the rewrite is queued. ``preparing``: no summary yet — the texts are the lead article's own."""


class StoryCardDict(TypedDict):
    story_id: str
    title: str
    summary: str
    importance: int
    category: str
    tickers: list[str]
    publishers: int
    materials: int
    first_published_at: RFC3339DateTime | None
    last_material_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    summary_state: SummaryStateOrStr
