from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CancelInviteResponse(SdkBaseModel):
    """Response confirming invite cancellation."""

    message: str
    """Success message"""

    invite_id: str = Field(alias="inviteId")
    """The invite document ID."""


class CancelInviteResponseDict(TypedDict):
    message: str
    invite_id: str
