from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.included_data1 import IncludedData1OrStr


class StartSyncExecutionInput(SdkBaseModel):
    state_machine_arn: str = Field(alias="stateMachineArn")
    """The Amazon Resource Name (ARN) of the state machine to execute."""

    name: Optional[str] = UNSET
    """The name of the execution."""

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

    included_data: Optional[IncludedData1OrStr] = Field(default=UNSET, alias="includedData")
    """If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt
    the definition. Alternatively, you can call the API with includedData = METADATA_ONLY to get a successful response
    without the encrypted definition."""


class StartSyncExecutionInputDict(TypedDict):
    state_machine_arn: str
    name: NotRequired[str]
    input: NotRequired[str]
    trace_header: NotRequired[str]
    included_data: NotRequired[IncludedData1OrStr]
