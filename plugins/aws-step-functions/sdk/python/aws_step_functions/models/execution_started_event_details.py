from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_event_execution_data_details import HistoryEventExecutionDataDetails, HistoryEventExecutionDataDetailsDict


class ExecutionStartedEventDetails(SdkBaseModel):
    input: Optional[str] = UNSET
    """The JSON data input to the execution. Length constraints apply to the payload size, and are expressed as bytes in
    UTF-8 encoding."""

    input_details: Optional[HistoryEventExecutionDataDetails] = Field(default=UNSET, alias="inputDetails")
    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The Amazon Resource Name (ARN) of the IAM role used for executing Lambda tasks."""

    state_machine_alias_arn: Optional[str] = Field(default=UNSET, alias="stateMachineAliasArn")
    """The Amazon Resource Name (ARN) that identifies a state machine alias used for starting the state machine
    execution."""

    state_machine_version_arn: Optional[str] = Field(default=UNSET, alias="stateMachineVersionArn")
    """The Amazon Resource Name (ARN) that identifies a state machine version used for starting the state machine
    execution."""


class ExecutionStartedEventDetailsDict(TypedDict):
    input: NotRequired[str]
    input_details: NotRequired[HistoryEventExecutionDataDetailsDict]
    role_arn: NotRequired[str]
    state_machine_alias_arn: NotRequired[str]
    state_machine_version_arn: NotRequired[str]
