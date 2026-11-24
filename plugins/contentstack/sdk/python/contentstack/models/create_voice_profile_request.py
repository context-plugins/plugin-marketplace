from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateVoiceProfileRequest(SdkBaseModel):
    """Parameters for creating or updating a Voice Profile."""

    name: str
    """Display name for the Voice Profile."""

    description: Optional[str] = UNSET
    """Description of the voice profile's purpose."""

    tone: Optional[str] = UNSET
    """Tonal characteristics for the voice profile."""

    style_guidelines: Optional[str] = UNSET
    """Writing style guidelines for AI content generation."""


class CreateVoiceProfileRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    tone: NotRequired[str]
    style_guidelines: NotRequired[str]
