from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mfa_status2 import MfaStatus2OrStr


class SessionInfoResponseDto(SdkBaseModel):
    """Login session info."""

    organization_id: Optional[str] = Field(default=UNSET, alias="organizationId")
    """BILL-generated ID of the current organization"""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """BILL-generated ID of the current user"""

    mfa_status: Optional[MfaStatus2OrStr] = Field(default=UNSET, alias="mfaStatus")
    mfa_bypass: Optional[bool] = Field(default=UNSET, alias="mfaBypass")
    """This field is set as ``true`` when MFA is disabled at the developer key level. All organizations that are linked
    to this developer key do not require MFA."""


class SessionInfoResponseDtoDict(TypedDict):
    organization_id: NotRequired[str]
    user_id: NotRequired[str]
    mfa_status: NotRequired[MfaStatus2OrStr]
    mfa_bypass: NotRequired[bool]
