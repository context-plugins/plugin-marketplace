from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MfaChallengeResponseDto(SdkBaseModel):
    """Response for MFA challenge."""

    challenge_id: Optional[str] = Field(default=UNSET, alias="challengeId")
    """MFA challenge ID. This value is required for validating the MFA challenge with ``POST
    /v3/mfa/challenge/validate``."""


class MfaChallengeResponseDtoDict(TypedDict):
    challenge_id: NotRequired[str]
