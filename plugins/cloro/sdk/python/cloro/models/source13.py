from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source13(SdkBaseModel):
    position: Optional[float] = UNSET
    """The position index of the source in the response"""

    url: Optional[str] = UNSET
    """The URL of the source"""

    label: Optional[str] = UNSET
    """The display label for the source"""

    description: Optional[str] = UNSET
    """A description of the source content"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class Source13Dict(TypedDict):
    position: NotRequired[float]
    url: NotRequired[str]
    label: NotRequired[str]
    description: NotRequired[str]
    redirect_link: NotRequired[str]
