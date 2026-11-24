from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .invited_user_body import InvitedUserBody, InvitedUserBodyDict


class InviteResponse(SdkBaseModel):
    """Response returned after creating a user invitation."""

    message: Optional[str] = UNSET
    """Success message"""

    user: Optional[InvitedUserBody] = UNSET


class InviteResponseDict(TypedDict):
    message: NotRequired[str]
    user: NotRequired[InvitedUserBodyDict]
