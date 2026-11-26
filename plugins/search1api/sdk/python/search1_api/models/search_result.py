from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind import KindOrStr


class SearchResult(SdkBaseModel):
    title: str
    link: str
    snippet: str
    content: Optional[str] = UNSET
    published_date: Optional[str] = UNSET
    """When the page was published, as ISO 8601: ``YYYY-MM-DD`` when only the day is known (web search engines), or
    ``YYYY-MM-DDTHH:MM:SSZ`` in UTC when the source carries a time (x, reddit, github, arxiv, youtube, bilibili, wechat,
    news feeds). Omitted when the source exposes no date, so treat it as optional per result."""

    kind: Optional[KindOrStr] = UNSET
    """What a ``github`` result is: a repository, an issue, a pull request, or a discussion. Only present for
    ``search_service: "github"``."""

    stars: Optional[int] = UNSET
    """Stargazer count of a ``github`` repository result (``kind: "repo"``)."""

    language: Optional[str] = UNSET
    """Primary language of a ``github`` repository result (``kind: "repo"``). Omitted when GitHub reports none."""

    num_comments: Optional[int] = UNSET
    """Comment count on a ``github`` issue, pull request or discussion, or on a ``hackernews`` thread (POST /news)."""

    story_url: Optional[str] = UNSET
    """POST /news with ``search_service: "hackernews"`` only: the submitted article. ``link`` is the Hacker News
    discussion thread; ``story_url`` is empty for Ask HN / Show HN text posts."""

    points: Optional[int] = UNSET
    """POST /news with ``search_service: "hackernews"`` only: upvotes on the thread."""


class SearchResultDict(TypedDict):
    title: str
    link: str
    snippet: str
    content: NotRequired[str]
    published_date: NotRequired[str]
    kind: NotRequired[KindOrStr]
    stars: NotRequired[int]
    language: NotRequired[str]
    num_comments: NotRequired[int]
    story_url: NotRequired[str]
    points: NotRequired[int]
