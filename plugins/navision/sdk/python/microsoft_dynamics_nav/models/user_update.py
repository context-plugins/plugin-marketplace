from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.state import StateOrStr


class UserUpdate(SdkBaseModel):
    state: Optional[StateOrStr] = UNSET
    expiry_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiryDate")


class UserUpdateDict(TypedDict):
    state: NotRequired[StateOrStr]
    expiry_date: NotRequired[RFC3339DateTime]
