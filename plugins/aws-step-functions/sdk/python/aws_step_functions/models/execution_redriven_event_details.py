from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExecutionRedrivenEventDetails(SdkBaseModel):
    redrive_count: Optional[int] = Field(default=UNSET, alias="redriveCount")
    """The number of times you've redriven an execution. If you have not yet redriven an execution, the redriveCount is
    0. This count is not updated for redrives that failed to start or are pending to be redriven."""


class ExecutionRedrivenEventDetailsDict(TypedDict):
    redrive_count: NotRequired[int]
