from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LoginResponseDto(SdkBaseModel):
    """Login response."""

    session_id: str = Field(alias="sessionId")
    """API session ID. Use this value in all subsequent API calls to confirm that you are in a signed-in session."""

    organization_id: str = Field(alias="organizationId")
    """Organization ID associated with the signed-in user"""

    user_id: str = Field(alias="userId")
    """BILL-generated ID of the signed-in user"""

    trusted: bool
    """This field is set as ``true`` if the current API session is MFA-trusted"""


class LoginResponseDtoDict(TypedDict):
    session_id: str
    organization_id: str
    user_id: str
    trusted: bool
