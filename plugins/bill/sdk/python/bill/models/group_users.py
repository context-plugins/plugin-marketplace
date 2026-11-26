from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GroupUsers(SdkBaseModel):
    """Users that are part of an approval group."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the user. The value begins with ``006``."""

    full_name: Optional[str] = Field(default=UNSET, alias="fullName")
    """User full name"""


class GroupUsersDict(TypedDict):
    id: NotRequired[str]
    full_name: NotRequired[str]
