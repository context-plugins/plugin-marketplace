from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApproverUserDto(SdkBaseModel):
    """User Approvers for a bill approval policy."""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """BILL-generated ID of the user. The value begins with ``006``."""

    full_name: Optional[str] = Field(default=UNSET, alias="fullName")
    """User full name"""


class ApproverUserDtoDict(TypedDict):
    user_id: NotRequired[str]
    full_name: NotRequired[str]
