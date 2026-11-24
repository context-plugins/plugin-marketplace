from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_aws_step_functions_operations_api import StatusAwsStepFunctionsOperationsApiOrStr
from .inspection_data import InspectionData, InspectionDataDict


class TestStateOutput(SdkBaseModel):
    output: Optional[str] = UNSET
    """The JSON output data of the state. Length constraints apply to the payload size, and are expressed as bytes in
    UTF-8 encoding."""

    error: Optional[str] = UNSET
    """The error returned when the execution of a state fails."""

    cause: Optional[str] = UNSET
    """A detailed explanation of the cause for the error when the execution of a state fails."""

    inspection_data: Optional[InspectionData] = Field(default=UNSET, alias="inspectionData")
    next_state: Optional[str] = Field(default=UNSET, alias="nextState")
    """The name of the next state to transition to. If you haven't defined a next state in your definition or if the
    execution of the state fails, this field doesn't contain a value."""

    status: Optional[StatusAwsStepFunctionsOperationsApiOrStr] = UNSET
    """The execution status of the state."""


class TestStateOutputDict(TypedDict):
    output: NotRequired[str]
    error: NotRequired[str]
    cause: NotRequired[str]
    inspection_data: NotRequired[InspectionDataDict]
    next_state: NotRequired[str]
    status: NotRequired[StatusAwsStepFunctionsOperationsApiOrStr]
