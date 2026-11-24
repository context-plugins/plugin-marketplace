from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartMessageMoveTaskResult(SdkBaseModel):
    task_handle: Optional[str] = Field(default=UNSET, alias="TaskHandle")
    """An identifier associated with a message movement task. You can use this identifier to cancel a specified message
    movement task using the CancelMessageMoveTask action."""


class StartMessageMoveTaskResultDict(TypedDict):
    task_handle: NotRequired[str]
