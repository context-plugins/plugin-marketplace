from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .challenge_preference import ChallengePreference, ChallengePreferenceDict
from .liveness_output_config import LivenessOutputConfig, LivenessOutputConfigDict


class CreateFaceLivenessSessionRequestSettings(SdkBaseModel):
    output_config: Optional[LivenessOutputConfig] = Field(default=UNSET, alias="OutputConfig")
    audit_images_limit: Optional[int] = Field(default=UNSET, alias="AuditImagesLimit")
    """Number of audit images to be returned back. Takes an integer between 0-4. Any integer less than 0 will return 0,
    any integer above 4 will return 4 images in the response. By default, it is set to 0. The limit is best effort and
    is based on the actual duration of the selfie-video."""

    challenge_preferences: Optional[list[ChallengePreference]] = Field(default=UNSET, alias="ChallengePreferences")
    """Indicates preferred challenge types and versions for the Face Liveness session to be created."""


class CreateFaceLivenessSessionRequestSettingsDict(TypedDict):
    output_config: NotRequired[LivenessOutputConfigDict]
    audit_images_limit: NotRequired[int]
    challenge_preferences: NotRequired[list[ChallengePreferenceDict]]
