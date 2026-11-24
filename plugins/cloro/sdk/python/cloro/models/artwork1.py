from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Artwork1(SdkBaseModel):
    title: Optional[str] = UNSET
    """Artwork title"""

    link: Optional[str] = UNSET
    """Link to more information about the artwork"""

    author: Optional[str] = UNSET
    """Author or creator name — omitted when not present"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class Artwork1Dict(TypedDict):
    title: NotRequired[str]
    link: NotRequired[str]
    author: NotRequired[str]
    redirect_link: NotRequired[str]
