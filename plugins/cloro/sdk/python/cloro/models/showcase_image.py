from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ShowcaseImage(SdkBaseModel):
    """Image rendered as the hero of a product showcase"""

    url: str
    width: Optional[float] = UNSET
    height: Optional[float] = UNSET


class ShowcaseImageDict(TypedDict):
    url: str
    width: NotRequired[float]
    height: NotRequired[float]
