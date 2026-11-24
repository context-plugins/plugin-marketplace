from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GatewayAsyncTaskResponse(SdkBaseModel):
    command_id: Optional[str] = Field(default=UNSET, alias="commandId")
    status: Optional[str] = UNSET
    task_id: Optional[int] = Field(default=UNSET, alias="taskId")


class GatewayAsyncTaskResponseDict(TypedDict):
    command_id: NotRequired[str]
    status: NotRequired[str]
    task_id: NotRequired[int]
