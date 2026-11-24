from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audio import Audio, AudioDict


class ApiV1MiscInstagramAudioResponse(SdkBaseModel):
    audio: Optional[list[Audio]] = UNSET


class ApiV1MiscInstagramAudioResponseDict(TypedDict):
    audio: NotRequired[list[AudioDict]]
