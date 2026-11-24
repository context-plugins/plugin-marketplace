from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.state1 import State1OrStr


class User(SdkBaseModel):
    user_security_id: Optional[UUID] = Field(default=UNSET, alias="userSecurityId")
    """The user security ID"""

    user_name: Optional[str] = Field(default=UNSET, alias="userName")
    """The user name"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The user display name"""

    state: Optional[State1OrStr] = UNSET
    """The user state"""

    expiry_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiryDate")
    """The user expiry date"""


class UserDict(TypedDict):
    user_security_id: NotRequired[UUID]
    user_name: NotRequired[str]
    display_name: NotRequired[str]
    state: NotRequired[State1OrStr]
    expiry_date: NotRequired[RFC3339DateTime]
