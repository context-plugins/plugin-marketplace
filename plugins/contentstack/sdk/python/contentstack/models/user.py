from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class User(SdkBaseModel):
    """A Contentstack user account."""

    uid: Optional[str] = UNSET
    """Unique identifier of the user."""

    first_name: Optional[str] = UNSET
    """User's first name."""

    last_name: Optional[str] = UNSET
    """User's last name."""

    email: Optional[EmailStr] = UNSET
    """User's email address."""

    authtoken: Optional[str] = UNSET
    """Session authentication token. Only returned on login."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the user account was created."""


class UserDict(TypedDict):
    uid: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[EmailStr]
    authtoken: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
