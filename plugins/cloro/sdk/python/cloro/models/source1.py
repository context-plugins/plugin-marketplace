from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source1(SdkBaseModel):
    position: Optional[int] = UNSET
    """Position of the source in the list"""

    label: Optional[str] = UNSET
    """Label or title of the source"""

    url: Optional[str] = UNSET
    """URL of the source"""

    description: Optional[str] = UNSET
    """Description or snippet of the source"""


class Source1Dict(TypedDict):
    position: NotRequired[int]
    label: NotRequired[str]
    url: NotRequired[str]
    description: NotRequired[str]
