from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserIdentifyResponse(SdkBaseModel):
    """Response containing information about the authenticated user."""

    first_name: Optional[str] = UNSET
    """The first name of the user."""

    last_name: Optional[str] = UNSET
    """The last name of the user."""

    email: Optional[str] = UNSET
    """The email address of the user."""

    profile_picture: Optional[str] = UNSET
    """URL to the user's profile picture."""


class UserIdentifyResponseDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[str]
    profile_picture: NotRequired[str]
