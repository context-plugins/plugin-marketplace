from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .earnings_report import EarningsReport, EarningsReportDict
from .eight_k_filing import EightKFiling, EightKFilingDict
from .enriched_article import EnrichedArticle, EnrichedArticleDict
from .insider_event import InsiderEvent, InsiderEventDict
from .original_article import OriginalArticle, OriginalArticleDict
from .search_match import SearchMatch, SearchMatchDict


class RichNewsArticle(SdkBaseModel):
    original: OriginalArticle
    """The article as fetched from the source. ``raw_text`` is intentionally NOT exposed here."""

    enrichment: EnrichedArticle
    search_match: OptionalNullable[SearchMatch] = UNSET
    """Present only on ``/api/news/search/`` rows — how this article matched the query. ``null`` on every other
    endpoint."""

    earnings: OptionalNullable[EarningsReport] = UNSET
    """AlphAI's structured read of the company's SEC earnings filing (8-K item 2.02, or a foreign private issuer's 6-K
    earnings release). Present only on a major ticker's earnings article whose figures cleared a cross-check against the
    filing text; null on every other article."""

    story_id: OptionalNullable[str] = UNSET
    """The story this article belongs to: a permanent key, the same value for a given story on every surface
    (``/api/news/``, search, trending, the MCP tools and ``/api/stories/``) and across calls. Filled on every row of
    ``/api/news/`` and ``/api/news/search/`` since 1.49.0, and always on ``/api/news/trending/``; a lone article is a
    story of one and names itself. The value is the ``uid`` of the story's first root article and does not change when a
    stronger copy later takes the root over or two stories merge (before 1.49.0 it followed the live root and could move
    once). Resolve it with ``/api/stories/{story_id}/``: ``found`` is a story summarised from two or more publishers,
    ``not_a_story`` means one publisher carried the event (``/api/news/{uid}/`` has the article), ``merged`` names the
    surviving story. ``/api/news/{uid}/`` carries it too; null only on ``/api/news/{uid}/related/``. The
    ``sources_count`` / ``sources`` pair stays collapse-only."""

    sources_count: OptionalNullable[int] = UNSET
    """Story-collapsed responses only. Number of distinct outlets (source domains) covering this story; the same outlet
    running it more than once counts once. Most stories are carried by a single outlet, so this is usually 1. Treat a
    value above 1 as the signal, not the number itself. May exceed the length of ``sources``, which is capped at 10.
    ``null`` in the default feed."""

    sources: OptionalNullable[list[str]] = UNSET
    """Story-collapsed responses only. Distinct source domains covering this story, in first-appearance order, capped at
    10. ``null`` in the default feed."""

    insider: OptionalNullable[InsiderEvent] = UNSET
    """``/api/news/insider/`` and ``/api/news/{uid}/`` — the structured SEC Form 4 event block, on every row whose
    source is a Form 4. ``null`` on every other row, on the other endpoints, and on rows without paired transaction
    data."""

    filing: OptionalNullable[EightKFiling] = UNSET
    """``/api/news/`` and ``/api/news/{uid}/`` — the structured SEC 8-K filing block, present on every row whose source
    is an 8-K (``original.source`` is ``SEC EDGAR 8-K``; filter them with ``source_type=sec_form8k`` or ``item=``).
    ``null`` on press, Form 4 and 6-K rows, on the other endpoints, and on the rare 8-K row without structured data."""


class RichNewsArticleDict(TypedDict):
    original: OriginalArticleDict
    enrichment: EnrichedArticleDict
    search_match: NotRequired[SearchMatchDict | None]
    earnings: NotRequired[EarningsReportDict | None]
    story_id: NotRequired[str | None]
    sources_count: NotRequired[int | None]
    sources: NotRequired[list[str] | None]
    insider: NotRequired[InsiderEventDict | None]
    filing: NotRequired[EightKFilingDict | None]
