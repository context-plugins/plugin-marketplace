from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .cloud_watch_events_execution_data_details import (
    CloudWatchEventsExecutionDataDetails,
    CloudWatchEventsExecutionDataDetailsDict,
)
from .enums.redrive_status import RedriveStatusOrStr
from .enums.status import StatusOrStr


class DescribeExecutionOutput(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) that identifies the execution."""

    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) of the executed stated machine."""

    name: Optional[str] = UNSET
    r"""The name of the execution. A name must not contain: white space brackets { } [ ] wildcard characters ? * special
    characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates
    (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain
    0-9, A-Z, a-z, - and _."""

    status: StatusOrStr
    """The current status of the execution."""

    start_date: RFC3339DateTime = Field(alias="startDate")
    """The date the execution is started."""

    stop_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="stopDate")
    """If the execution ended, the date the execution stopped."""

    input: Optional[str] = UNSET
    """The string that contains the JSON input data of the execution. Length constraints apply to the payload size, and
    are expressed as bytes in UTF-8 encoding."""

    input_details: Optional[CloudWatchEventsExecutionDataDetails] = Field(default=UNSET, alias="inputDetails")
    output: Optional[str] = UNSET
    """The JSON output data of the execution. Length constraints apply to the payload size, and are expressed as bytes
    in UTF-8 encoding. This field is set only if the execution succeeds. If the execution fails, this field is null."""

    output_details: Optional[CloudWatchEventsExecutionDataDetails] = Field(default=UNSET, alias="outputDetails")
    trace_header: Optional[str] = Field(default=UNSET, alias="traceHeader")
    """The X-Ray trace header that was passed to the execution. For X-Ray traces, all Amazon Web Services services use
    the X-Amzn-Trace-Id header from the HTTP request. Using the header is the preferred mechanism to identify a trace.
    StartExecution and StartSyncExecution API operations can also use traceHeader from the body of the request payload.
    If both sources are provided, Step Functions will use the header value (preferred) over the value in the request
    body."""

    map_run_arn: Optional[str] = Field(default=UNSET, alias="mapRunArn")
    """The Amazon Resource Name (ARN) that identifies a Map Run, which dispatched this execution."""

    error: Optional[str] = UNSET
    """The error string if the state machine execution failed."""

    cause: Optional[str] = UNSET
    """The cause string if the state machine execution failed."""

    state_machine_version_arn: Optional[str] = Field(default=UNSET, alias="stateMachineVersionArn")
    """The Amazon Resource Name (ARN) of the state machine version associated with the execution. The version ARN is a
    combination of state machine ARN and the version number separated by a colon (:). For example, stateMachineARN:1. If
    you start an execution from a StartExecution request without specifying a state machine version or alias ARN, Step
    Functions returns a null value."""

    state_machine_alias_arn: Optional[str] = Field(default=UNSET, alias="stateMachineAliasArn")
    """The Amazon Resource Name (ARN) of the state machine alias associated with the execution. The alias ARN is a
    combination of state machine ARN and the alias name separated by a colon (:). For example, stateMachineARN:PROD. If
    you start an execution from a StartExecution request with a state machine version ARN, this field will be null."""

    redrive_count: Optional[int] = Field(default=UNSET, alias="redriveCount")
    """The number of times you've redriven an execution. If you have not yet redriven an execution, the redriveCount is
    0. This count is only updated if you successfully redrive an execution."""

    redrive_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="redriveDate")
    """The date the execution was last redriven. If you have not yet redriven an execution, the redriveDate is null. The
    redriveDate is unavailable if you redrive a Map Run that starts child workflow executions of type EXPRESS."""

    redrive_status: Optional[RedriveStatusOrStr] = Field(default=UNSET, alias="redriveStatus")
    """Indicates whether or not an execution can be redriven at a given point in time. For executions of type STANDARD,
    redriveStatus is NOT_REDRIVABLE if calling the RedriveExecution API action would return the ExecutionNotRedrivable
    error. For a Distributed Map that includes child workflows of type STANDARD, redriveStatus indicates whether or not
    the Map Run can redrive child workflow executions. For a Distributed Map that includes child workflows of type
    EXPRESS, redriveStatus indicates whether or not the Map Run can redrive child workflow executions. You can redrive
    failed or timed out EXPRESS wo"""

    redrive_status_reason: Optional[str] = Field(default=UNSET, alias="redriveStatusReason")
    """When redriveStatus is NOT_REDRIVABLE, redriveStatusReason specifies the reason why an execution cannot be
    redriven. For executions of type STANDARD, or for a Distributed Map that includes child workflows of type STANDARD,
    redriveStatusReason can include one of the following reasons: State machine is in DELETING status. Execution is
    RUNNING and cannot be redriven. Execution is SUCCEEDED and cannot be redriven. Execution was started before the
    launch of RedriveExecution. Execution history event limit exceeded. Execution has exceeded the max execution time.
    Execution redrivable period exceeded. F"""


class DescribeExecutionOutputDict(TypedDict):
    execution_arn: str
    state_machine_arn: str
    name: NotRequired[str]
    status: StatusOrStr
    start_date: RFC3339DateTime
    stop_date: NotRequired[RFC3339DateTime]
    input: NotRequired[str]
    input_details: NotRequired[CloudWatchEventsExecutionDataDetailsDict]
    output: NotRequired[str]
    output_details: NotRequired[CloudWatchEventsExecutionDataDetailsDict]
    trace_header: NotRequired[str]
    map_run_arn: NotRequired[str]
    error: NotRequired[str]
    cause: NotRequired[str]
    state_machine_version_arn: NotRequired[str]
    state_machine_alias_arn: NotRequired[str]
    redrive_count: NotRequired[int]
    redrive_date: NotRequired[RFC3339DateTime]
    redrive_status: NotRequired[RedriveStatusOrStr]
    redrive_status_reason: NotRequired[str]
