from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.summary_state import SummaryStateOrStr
from .story_key_fact import StoryKeyFact, StoryKeyFactDict
from .story_ticker_take import StoryTickerTake, StoryTickerTakeDict


class Story(SdkBaseModel):
    """The full story — a ``StoryCard`` plus the summary's body."""

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

    why_it_matters: str
    """Why the event matters to the market, one short paragraph. Empty in ``preparing`` state."""

    key_facts: list[StoryKeyFact]
    """Up to six facts, each attributed to the article it was read from."""

    ticker_takes: list[StoryTickerTake]
    """The read per ticker — direction and a one-line note."""

    uncertainties: list[str]
    """What the articles leave open or disagree on."""

    based_on: int
    """Articles whose text the model read when writing the summary. Shown as "based on N of M sources" next to
    ``materials_at_build``."""

    materials_at_build: int
    """The story's visible article count when the summary was written."""

    new_materials: int
    """Articles that joined after the summary was written (non-zero only in ``stale`` state)."""

    revision_generated_at: RFC3339DateTime | None
    """When the published summary was written; ``null`` in ``preparing`` state."""

    model: str
    """The model that wrote the published summary; empty in ``preparing`` state."""

    indexable: bool
    """Whether alphai.io lets search engines index this story's page (a published summary, ``importance >= 8`` and at
    least five publishers). Informational — it says nothing about the API's own access."""


class StoryDict(TypedDict):
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
    why_it_matters: str
    key_facts: list[StoryKeyFactDict]
    ticker_takes: list[StoryTickerTakeDict]
    uncertainties: list[str]
    based_on: int
    materials_at_build: int
    new_materials: int
    revision_generated_at: RFC3339DateTime | None
    model: str
    indexable: bool
