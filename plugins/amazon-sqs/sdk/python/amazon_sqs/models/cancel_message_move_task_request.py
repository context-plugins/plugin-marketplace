from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CancelMessageMoveTaskRequest(SdkBaseModel):
    task_handle: str = Field(alias="TaskHandle")
    """An identifier associated with a message movement task."""


class CancelMessageMoveTaskRequestDict(TypedDict):
    task_handle: str
