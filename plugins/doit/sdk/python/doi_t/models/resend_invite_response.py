from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResendInviteResponse(SdkBaseModel):
    """Response confirming invite resend."""

    message: str
    """Success message"""

    invite_id: str = Field(alias="inviteId")
    """The invite document ID."""


class ResendInviteResponseDict(TypedDict):
    message: str
    invite_id: str
