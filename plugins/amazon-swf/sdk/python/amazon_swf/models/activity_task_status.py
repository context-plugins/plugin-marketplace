from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ActivityTaskStatus(SdkBaseModel):
    cancel_requested: bool = Field(alias="cancelRequested")
    """Set to true if cancellation of the task is requested."""


class ActivityTaskStatusDict(TypedDict):
    cancel_requested: bool
