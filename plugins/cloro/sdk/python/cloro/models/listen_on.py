from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListenOn(SdkBaseModel):
    platform: Optional[str] = UNSET
    """Streaming platform name"""

    link: Optional[str] = UNSET
    """Link to the artist on the platform"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class ListenOnDict(TypedDict):
    platform: NotRequired[str]
    link: NotRequired[str]
    redirect_link: NotRequired[str]
