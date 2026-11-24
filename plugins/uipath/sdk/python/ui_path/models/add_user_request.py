from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AddUserRequest(SdkBaseModel):
    """Request payload for adding a new user to Automation Hub"""

    email: EmailStr
    """Email address of the user to add"""

    role: str
    """Role to assign to the user"""


class AddUserRequestDict(TypedDict):
    email: EmailStr
    role: str
