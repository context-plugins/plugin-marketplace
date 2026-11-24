from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PeopleAreSaying(SdkBaseModel):
    position: float
    """Position within the module (1-indexed)"""

    title: str
    """Card title as displayed on the SERP"""

    link: str
    """Destination URL the card points to (often a Reddit, Quora, or community forum thread)"""

    date: str
    """Google's raw relative-time text (e.g., "5 days ago", "2 weeks ago"). Free-form string — not normalized to a
    timestamp."""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class PeopleAreSayingDict(TypedDict):
    position: float
    title: str
    link: str
    date: str
    redirect_link: NotRequired[str]
