from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class VoiceProfile(SdkBaseModel):
    """A Voice Profile defining writing style and tone for AI content generation."""

    uid: Optional[str] = UNSET
    """Unique identifier of the Voice Profile."""

    name: Optional[str] = UNSET
    """Display name of the Voice Profile."""

    description: Optional[str] = UNSET
    """Description of the voice profile's intended use case."""

    tone: Optional[str] = UNSET
    """The tonal characteristics of the voice profile such as formal, conversational, or authoritative."""

    style_guidelines: Optional[str] = UNSET
    """Writing style guidelines that define how content should be structured."""

    brand_kit_uid: Optional[str] = UNSET
    """UID of the Brand Kit this Voice Profile belongs to."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the Voice Profile was created."""


class VoiceProfileDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    tone: NotRequired[str]
    style_guidelines: NotRequired[str]
    brand_kit_uid: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
