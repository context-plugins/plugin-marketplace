from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .voice_profile import VoiceProfile, VoiceProfileDict


class VoiceProfileList(SdkBaseModel):
    """A list of Voice Profiles for a Brand Kit."""

    data: Optional[list[VoiceProfile]] = UNSET
    """Array of Voice Profile objects."""


class VoiceProfileListDict(TypedDict):
    data: NotRequired[list[VoiceProfileDict]]
