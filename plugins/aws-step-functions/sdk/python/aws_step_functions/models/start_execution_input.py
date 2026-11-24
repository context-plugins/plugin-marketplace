from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartExecutionInput(SdkBaseModel):
    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) of the state machine to execute. The stateMachineArn parameter accepts one of the
    following inputs: An unqualified state machine ARN – Refers to a state machine ARN that isn't qualified with a
    version or alias ARN. The following is an example of an unqualified state machine ARN. arn::states:::stateMachine:
    Step Functions doesn't associate state machine executions that you start with an unqualified ARN with a version.
    This is true even if that version uses the same revision that the execution used. A state machine version ARN –
    Refers to a version ARN, which is a"""

    name: Optional[str] = UNSET
    """Optional name of the execution. For STANDARD workflows, this name must be unique for your Amazon Web Services
    account, region, and state machine. If a previous execution with the same name exists, you can reuse the name 90
    days after it closes. For EXPRESS workflows, execution names can be reused immediately. For more information, see
    Limits Related to State Machine Executions in the Step Functions Developer Guide. If you don't provide a name for
    the execution, Step Functions automatically generates a universally unique identifier (UUID) as the execution name.
    A name must not contain: white sp"""

    input: Optional[str] = UNSET
    r"""The string that contains the JSON input data for the execution, for example: "{\"first_name\" : \"Alejandro\"}"
    If you don't include any JSON input data, you still must include the two braces, for example: "{}" Length
    constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding."""

    trace_header: Optional[str] = Field(default=UNSET, alias="traceHeader")
    """Passes the X-Ray trace header. The trace header can also be passed in the request payload. For X-Ray traces, all
    Amazon Web Services services use the X-Amzn-Trace-Id header from the HTTP request. Using the header is the preferred
    mechanism to identify a trace. StartExecution and StartSyncExecution API operations can also use traceHeader from
    the body of the request payload. If both sources are provided, Step Functions will use the header value (preferred)
    over the value in the request body."""


class StartExecutionInputDict(TypedDict):
    state_machine_arn: str
    name: NotRequired[str]
    input: NotRequired[str]
    trace_header: NotRequired[str]
