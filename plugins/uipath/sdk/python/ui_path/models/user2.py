from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class User2(SdkBaseModel):
    """A user account in the UiPath organization"""

    id: Optional[str] = UNSET
    """Unique identifier of the user"""

    name: Optional[str] = UNSET
    """Display name of the user"""

    email: Optional[EmailStr] = UNSET
    """Email address of the user"""

    is_active: Optional[bool] = Field(default=UNSET, alias="isActive")
    """Whether the user account is active"""

    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    """ISO 8601 timestamp when the user was created"""

    last_login_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastLoginDate")
    """ISO 8601 timestamp of the user's most recent login"""


class User2Dict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    email: NotRequired[EmailStr]
    is_active: NotRequired[bool]
    created_on: NotRequired[RFC3339DateTime]
    last_login_date: NotRequired[RFC3339DateTime]
