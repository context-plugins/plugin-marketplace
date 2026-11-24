from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .updated_user_body import UpdatedUserBody, UpdatedUserBodyDict


class UpdateUserResponse(SdkBaseModel):
    """Response of a user update operation."""

    message: Optional[str] = UNSET
    """Success message"""

    user: Optional[UpdatedUserBody] = UNSET
    """The updated user record."""


class UpdateUserResponseDict(TypedDict):
    message: NotRequired[str]
    user: NotRequired[UpdatedUserBodyDict]
