from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.media_type1 import MediaType1OrStr


class AtifAudioSource(SdkBaseModel):
    media_type: MediaType1OrStr
    path: str
    duration_sec: Optional[float] = UNSET


class AtifAudioSourceDict(TypedDict):
    media_type: MediaType1OrStr
    path: str
    duration_sec: NotRequired[float]
