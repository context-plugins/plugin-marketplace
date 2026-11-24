from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task3 import Task3, Task3Dict


class BufferTaskResponse(SdkBaseModel):
    """Response message for BufferTask."""

    task: Optional[Task3] = UNSET
    """The created task."""


class BufferTaskResponseDict(TypedDict):
    task: NotRequired[Task3Dict]
