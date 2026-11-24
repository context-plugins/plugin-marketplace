from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .image import Image, ImageDict


class ImagesResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[str] = UNSET
    images: Optional[list[Image]] = UNSET
    query: Optional[Any] = UNSET


class ImagesResponseDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[str]
    images: NotRequired[list[ImageDict]]
    query: NotRequired[Any]
