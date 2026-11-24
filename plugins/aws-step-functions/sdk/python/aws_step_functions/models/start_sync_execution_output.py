from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .billing_details import BillingDetails, BillingDetailsDict
from .cloud_watch_events_execution_data_details import (
    CloudWatchEventsExecutionDataDetails,
    CloudWatchEventsExecutionDataDetailsDict,
)
from .enums.status4 import Status4OrStr


class StartSyncExecutionOutput(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) that identifies the execution."""

    state_machine_arn: Optional[str] = Field(default=UNSET, alias="stateMachineArn")
    """The Amazon Resource Name (ARN) that identifies the state machine."""

    name: Optional[str] = UNSET
    """The name of the execution."""

    start_date: RFC3339DateTime = Field(alias="startDate")
    """The date the execution is started."""

    stop_date: RFC3339DateTime = Field(alias="stopDate")
    """If the execution has already ended, the date the execution stopped."""

    status: Status4OrStr
    """The current status of the execution."""

    error: Optional[str] = UNSET
    """The error code of the failure."""

    cause: Optional[str] = UNSET
    """A more detailed explanation of the cause of the failure."""

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

    billing_details: Optional[BillingDetails] = Field(default=UNSET, alias="billingDetails")


class StartSyncExecutionOutputDict(TypedDict):
    execution_arn: str
    state_machine_arn: NotRequired[str]
    name: NotRequired[str]
    start_date: RFC3339DateTime
    stop_date: RFC3339DateTime
    status: Status4OrStr
    error: NotRequired[str]
    cause: NotRequired[str]
    input: NotRequired[str]
    input_details: NotRequired[CloudWatchEventsExecutionDataDetailsDict]
    output: NotRequired[str]
    output_details: NotRequired[CloudWatchEventsExecutionDataDetailsDict]
    trace_header: NotRequired[str]
    billing_details: NotRequired[BillingDetailsDict]
