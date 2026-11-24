from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .group_info import GroupInfo, GroupInfoDict


class GroupObserverResponse(SdkBaseModel):
    id: str
    """Unique observer identifier."""

    type_: Literal["GROUP"] = Field(default="GROUP", alias="type")
    """Observer type."""

    invited_at: RFC3339DateTime
    """Timestamp when the observer was invited."""

    invited_by: str
    """Identifier of the user or API key that invited the observer."""

    group_info: GroupInfo
    """Information about the group observer."""


class GroupObserverResponseDict(TypedDict):
    id: str
    type_: Literal["GROUP"]
    invited_at: RFC3339DateTime
    invited_by: str
    group_info: GroupInfoDict
