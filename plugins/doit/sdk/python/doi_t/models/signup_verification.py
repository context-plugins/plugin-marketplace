from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class SignupVerification(SdkBaseModel):
    """Present while the request awaits the emailed code."""

    required: Optional[bool] = UNSET
    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    resend_after_seconds: Optional[int] = Field(default=UNSET, alias="resendAfterSeconds")
    sends_remaining: Optional[int] = Field(default=UNSET, alias="sendsRemaining")


class SignupVerificationDict(TypedDict):
    required: NotRequired[bool]
    expires_at: NotRequired[RFC3339DateTime]
    resend_after_seconds: NotRequired[int]
    sends_remaining: NotRequired[int]
