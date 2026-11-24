from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Artwork(SdkBaseModel):
    title: Optional[str] = UNSET
    """Artwork title"""

    link: Optional[str] = UNSET
    """Link to more information about the artwork"""

    author: Optional[str] = UNSET
    """Author or creator name — omitted when not present"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class ArtworkDict(TypedDict):
    title: NotRequired[str]
    link: NotRequired[str]
    author: NotRequired[str]
    redirect_link: NotRequired[str]
