from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source4(SdkBaseModel):
    position: Optional[float] = UNSET
    """1-based position index of the source"""

    url: Optional[str] = UNSET
    """Source URL"""

    label: Optional[str] = UNSET
    """Source title (the display label Google renders on the source rail)"""

    description: Optional[str] = UNSET
    """Source description / snippet"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class Source4Dict(TypedDict):
    position: NotRequired[float]
    url: NotRequired[str]
    label: NotRequired[str]
    description: NotRequired[str]
    redirect_link: NotRequired[str]
