from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class StoryMaterial(SdkBaseModel):
    uid: str
    """The article's uid — ``/api/news/{uid}/`` has the enriched row."""

    title: str
    publisher: str
    """Source domain."""

    time_published: RFC3339DateTime
    url: str
    """The publisher's own URL of the article."""

    relevance_score: int
    seo_eligible: bool
    """Whether the article passes AlphAI's quality gate (relevance 7+, tickers, a news category, new information); the
    story page links such articles to their alphai.io page. Informational — the API serves every row regardless."""


class StoryMaterialDict(TypedDict):
    uid: str
    title: str
    publisher: str
    time_published: RFC3339DateTime
    url: str
    relevance_score: int
    seo_eligible: bool
