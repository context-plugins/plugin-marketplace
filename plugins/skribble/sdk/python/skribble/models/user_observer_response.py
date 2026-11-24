from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .user_info import UserInfo, UserInfoDict


class UserObserverResponse(SdkBaseModel):
    id: str
    """Unique observer identifier."""

    type_: Literal["USER"] = Field(default="USER", alias="type")
    """Observer type."""

    invited_at: RFC3339DateTime
    """Timestamp when the observer was invited."""

    invited_by: str
    """Identifier of the user or API key that invited the observer."""

    user_info: UserInfo
    """Information about the user observer."""


class UserObserverResponseDict(TypedDict):
    id: str
    type_: Literal["USER"]
    invited_at: RFC3339DateTime
    invited_by: str
    user_info: UserInfoDict
