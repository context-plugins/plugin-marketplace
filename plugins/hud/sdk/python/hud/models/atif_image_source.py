from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.media_type import MediaTypeOrStr


class AtifImageSource(SdkBaseModel):
    media_type: MediaTypeOrStr
    path: str


class AtifImageSourceDict(TypedDict):
    media_type: MediaTypeOrStr
    path: str
