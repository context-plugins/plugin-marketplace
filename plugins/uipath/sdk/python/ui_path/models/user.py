from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class User(SdkBaseModel):
    """A user in Automation Hub"""

    id: Optional[int] = UNSET
    """Unique integer identifier of the user"""

    name: Optional[str] = UNSET
    """Display name of the user"""

    email: Optional[EmailStr] = UNSET
    """Email address of the user"""

    role: Optional[str] = UNSET
    """Role assigned to the user in Automation Hub"""

    is_active: Optional[bool] = Field(default=UNSET, alias="isActive")
    """Whether the user account is active"""


class UserDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    email: NotRequired[EmailStr]
    role: NotRequired[str]
    is_active: NotRequired[bool]
