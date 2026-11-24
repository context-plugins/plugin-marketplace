from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetActivityTaskOutput(SdkBaseModel):
    task_token: Optional[str] = Field(default=UNSET, alias="taskToken")
    """A token that identifies the scheduled task. This token must be copied and included in subsequent calls to
    SendTaskHeartbeat, SendTaskSuccess or SendTaskFailure in order to report the progress or completion of the task."""

    input: Optional[str] = UNSET
    """The string that contains the JSON input data for the task. Length constraints apply to the payload size, and are
    expressed as bytes in UTF-8 encoding."""


class GetActivityTaskOutputDict(TypedDict):
    task_token: NotRequired[str]
    input: NotRequired[str]
