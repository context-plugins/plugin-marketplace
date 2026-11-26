from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.ownership_form import OwnershipFormOrStr
from .topic import Topic, TopicDict


class OriginalArticle(SdkBaseModel):
    """The article as fetched from the source. ``raw_text`` is intentionally NOT exposed here."""

    id: Optional[int] = UNSET
    uid: str
    title: str
    url: str
    time_published: RFC3339DateTime
    authors: Optional[list[str]] = UNSET
    """Article authors. On SEC Form 4 rows: every reporting owner of the filing, primary first — a joint filing by a
    holding vehicle and the person behind it lists both."""

    summary: str
    """AI-generated summary safe to redistribute."""

    banner_image: OptionalNullable[str] = UNSET
    source: str
    source_domain: Optional[str] = UNSET
    topics: Optional[list[Topic]] = UNSET
    tickers_sentiment: Optional[list[Any]] = UNSET
    ownership_form: OptionalNullable[OwnershipFormOrStr] = UNSET
    """SEC Form 4 insider rows only — the holding pool the transaction touched. ``null`` for non-insider news. A single
    Form 4 can surface a ``direct`` and an ``indirect`` leg of the same plan as two separate articles (same filing URL,
    same date); they are distinct economic events, so SUM them rather than dedupe by URL/accession."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When AlphAI received the article — NOT its publish time (that is ``time_published``). Use it to judge how fresh a
    pickup is. Do not build "what's new" polling on this field; that is what ``sort=ingested`` on ``/api/news/`` and
    ``/api/news/insider/`` is for."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """Last time the stored article row was touched (including internal maintenance). Informational only."""


class OriginalArticleDict(TypedDict):
    id: NotRequired[int]
    uid: str
    title: str
    url: str
    time_published: RFC3339DateTime
    authors: NotRequired[list[str]]
    summary: str
    banner_image: NotRequired[str | None]
    source: str
    source_domain: NotRequired[str]
    topics: NotRequired[list[TopicDict]]
    tickers_sentiment: NotRequired[list[Any]]
    ownership_form: NotRequired[OwnershipFormOrStr | None]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
