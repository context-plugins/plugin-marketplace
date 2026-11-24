from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetActivityTaskInput(SdkBaseModel):
    activity_arn: str = Field(alias="activityArn")
    """The Amazon Resource Name (ARN) of the activity to retrieve tasks from (assigned when you create the task using
    CreateActivity.)"""

    worker_name: Optional[str] = Field(default=UNSET, alias="workerName")
    """You can provide an arbitrary name in order to identify the worker that the task is assigned to. This name is used
    when it is logged in the execution history."""


class GetActivityTaskInputDict(TypedDict):
    activity_arn: str
    worker_name: NotRequired[str]
