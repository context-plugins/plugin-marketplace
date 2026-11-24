from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Image(SdkBaseModel):
    title: Optional[str] = UNSET
    """Image title"""

    url: Optional[str] = UNSET
    """Image URL"""


class ImageDict(TypedDict):
    title: NotRequired[str]
    url: NotRequired[str]
