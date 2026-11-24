from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type5 import Type5OrStr


class TaskRunProgressMessageEvent(SdkBaseModel):
    """A message for a task run progress update."""

    type_: Type5OrStr = Field(alias="type")
    """Event type; always starts with 'task_run.progress_msg'."""

    message: str
    """Progress update message."""

    timestamp: str
    """Timestamp of the message."""


class TaskRunProgressMessageEventDict(TypedDict):
    type_: Type5OrStr
    message: str
    timestamp: str
