from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValueUipathUsersApi(SdkBaseModel):
    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique user identifier"""

    user_name: Optional[str] = Field(default=UNSET, alias="UserName")
    """Username login identifier"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Display name of the user"""

    email_address: Optional[EmailStr] = Field(default=UNSET, alias="EmailAddress")
    """Email address of the user"""

    is_active: Optional[bool] = Field(default=UNSET, alias="IsActive")
    """Whether the user account is active"""


class ValueUipathUsersApiDict(TypedDict):
    id: NotRequired[int]
    user_name: NotRequired[str]
    name: NotRequired[str]
    email_address: NotRequired[EmailStr]
    is_active: NotRequired[bool]
