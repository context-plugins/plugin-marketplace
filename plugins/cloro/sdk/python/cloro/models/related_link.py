from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RelatedLink(SdkBaseModel):
    label: str
    """The related page's own title. Empty string when Google ships none — read ``domain`` / ``url`` for identity in
    that case."""

    citation_pill_id: int = Field(alias="citationPillId")
    """Matches the ``citationPillId`` of the chip's ``citationPills`` entries, so a related link can be grouped with its
    pill."""

    url: str
    """Direct URL of the related link."""

    domain: str
    """Host extracted from ``url``, for grouping and display."""

    description: Optional[str] = UNSET
    """Snippet Google ships for the related link. Omitted when absent."""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class RelatedLinkDict(TypedDict):
    label: str
    citation_pill_id: int
    url: str
    domain: str
    description: NotRequired[str]
    redirect_link: NotRequired[str]
