from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ObjectId(SdkBaseModel):
    """Represents an ObjectId (see also BsonObjectId)."""

    model_config = ConfigDict(extra="forbid")

    timestamp: Optional[int] = Field(default=UNSET, alias="Timestamp")
    """Gets the timestamp."""

    machine: Optional[int] = Field(default=UNSET, alias="Machine")
    """Gets the machine."""

    pid: Optional[int] = Field(default=UNSET, alias="Pid")
    """Gets the PID."""

    increment: Optional[int] = Field(default=UNSET, alias="Increment")
    """Gets the increment."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """Gets the creation time (derived from the timestamp)."""


class ObjectIdDict(TypedDict):
    timestamp: NotRequired[int]
    machine: NotRequired[int]
    pid: NotRequired[int]
    increment: NotRequired[int]
    creation_time: NotRequired[RFC3339DateTime]
