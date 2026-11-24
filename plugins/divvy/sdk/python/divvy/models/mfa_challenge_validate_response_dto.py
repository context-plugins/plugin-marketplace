from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MfaChallengeValidateResponseDto(SdkBaseModel):
    """Response for MFA challenge validation."""

    remember_me_id: Optional[str] = Field(default=UNSET, alias="rememberMeId")
    """MFA ID. This value expires in 30 days.

    When your API session is expiring, this value is required for generating a new MFA-trusted API session with ``POST
    /v3/login``."""


class MfaChallengeValidateResponseDtoDict(TypedDict):
    remember_me_id: NotRequired[str]
