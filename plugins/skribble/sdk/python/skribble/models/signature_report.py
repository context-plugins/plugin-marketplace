from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .header import Header, HeaderDict
from .user_list import UserList, UserListDict


class SignatureReport(SdkBaseModel):
    header: Optional[Header] = UNSET
    """Metadata and status information about the signature request"""

    user_list: Optional[list[UserList]] = Field(default=UNSET, alias="userList")
    """List of users involved in the signature process"""

    error: OptionalNullable[str] = UNSET


class SignatureReportDict(TypedDict):
    header: NotRequired[HeaderDict]
    user_list: NotRequired[list[UserListDict]]
    error: NotRequired[str | None]
