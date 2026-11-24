from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PartnerLoginResponseDto(SdkBaseModel):
    """Login response."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """API session ID. Use this value in all subsequent API calls to confirm that you are in a signed-in session."""


class PartnerLoginResponseDtoDict(TypedDict):
    session_id: NotRequired[str]
