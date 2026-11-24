from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity1 import Severity1OrStr
from .enums.type_aws_step_functions_operations_api import TypeAwsStepFunctionsOperationsApiOrStr


class ValidateStateMachineDefinitionInput(SdkBaseModel):
    definition: str
    """The Amazon States Language definition of the state machine. For more information, see Amazon States Language
    (ASL)."""

    type_: Optional[TypeAwsStepFunctionsOperationsApiOrStr] = Field(default=UNSET, alias="type")
    """The target type of state machine for this definition. The default is STANDARD."""

    severity: Optional[Severity1OrStr] = UNSET
    """Minimum level of diagnostics to return. ERROR returns only ERROR diagnostics, whereas WARNING returns both
    WARNING and ERROR diagnostics. The default is ERROR."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of diagnostics that are returned per call. The default and maximum value is 100. Setting the
    value to 0 will also use the default of 100. If the number of diagnostics returned in the response exceeds
    maxResults, the value of the truncated field in the response will be set to true."""


class ValidateStateMachineDefinitionInputDict(TypedDict):
    definition: str
    type_: NotRequired[TypeAwsStepFunctionsOperationsApiOrStr]
    severity: NotRequired[Severity1OrStr]
    max_results: NotRequired[int]
