from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LoginAsUserResponseDto(SdkBaseModel):
    """API login as user response."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """API session ID. Use this value in all subsequent API calls to confirm that you are in a signed-in session."""

    trusted: Optional[bool] = UNSET
    """This field is set as ``true`` if the current API session is MFA-trusted"""


class LoginAsUserResponseDtoDict(TypedDict):
    session_id: NotRequired[str]
    trusted: NotRequired[bool]
