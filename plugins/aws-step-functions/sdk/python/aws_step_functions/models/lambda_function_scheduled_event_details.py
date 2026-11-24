from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_event_execution_data_details import HistoryEventExecutionDataDetails, HistoryEventExecutionDataDetailsDict
from .task_credentials import TaskCredentials, TaskCredentialsDict


class LambdaFunctionScheduledEventDetails(SdkBaseModel):
    resource: str
    """The Amazon Resource Name (ARN) of the scheduled Lambda function."""

    input: Optional[str] = UNSET
    """The JSON data input to the Lambda function. Length constraints apply to the payload size, and are expressed as
    bytes in UTF-8 encoding."""

    input_details: Optional[HistoryEventExecutionDataDetails] = Field(default=UNSET, alias="inputDetails")
    timeout_in_seconds: Optional[int] = Field(default=UNSET, alias="timeoutInSeconds")
    """The maximum allowed duration of the Lambda function."""

    task_credentials: Optional[TaskCredentials] = Field(default=UNSET, alias="taskCredentials")


class LambdaFunctionScheduledEventDetailsDict(TypedDict):
    resource: str
    input: NotRequired[str]
    input_details: NotRequired[HistoryEventExecutionDataDetailsDict]
    timeout_in_seconds: NotRequired[int]
    task_credentials: NotRequired[TaskCredentialsDict]
