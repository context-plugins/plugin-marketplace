from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source9(SdkBaseModel):
    label: Optional[str] = UNSET
    """Title of the source"""

    url: Optional[str] = UNSET
    """URL of the source"""

    description: Optional[str] = UNSET
    """Description of the source"""

    position: Optional[float] = UNSET
    """Position of source (1-indexed)"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class Source9Dict(TypedDict):
    label: NotRequired[str]
    url: NotRequired[str]
    description: NotRequired[str]
    position: NotRequired[float]
    redirect_link: NotRequired[str]
