from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .user_action import UserAction, UserActionDict


class UserList(SdkBaseModel):
    id: str
    firstname: Optional[str] = UNSET
    lastname: Optional[str] = UNSET
    group_name: Optional[str] = Field(default=UNSET, alias="groupName")
    email: OptionalNullable[str] = UNSET
    mobile: Optional[str] = UNSET
    business_name: Optional[str] = Field(default=UNSET, alias="businessName")
    user_actions: Optional[list[UserAction]] = Field(default=UNSET, alias="userActions")


class UserListDict(TypedDict):
    id: str
    firstname: NotRequired[str]
    lastname: NotRequired[str]
    group_name: NotRequired[str]
    email: NotRequired[str | None]
    mobile: NotRequired[str]
    business_name: NotRequired[str]
    user_actions: NotRequired[list[UserActionDict]]
