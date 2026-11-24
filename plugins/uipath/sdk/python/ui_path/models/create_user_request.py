from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateUserRequest(SdkBaseModel):
    """Request payload for creating a new user account"""

    email: EmailStr
    """Email address for the new user account"""

    name: str
    """Display name for the new user"""

    surname: Optional[str] = UNSET
    """Surname of the new user"""


class CreateUserRequestDict(TypedDict):
    email: EmailStr
    name: str
    surname: NotRequired[str]
