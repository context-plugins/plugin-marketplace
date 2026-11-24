from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsStepFunctionsOperationsApi(str, Enum):
    AWS_STEP_FUNCTIONS_VALIDATE_STATE_MACHINE_DEFINITION = "AWSStepFunctions.ValidateStateMachineDefinition"

    __str__ = str.__str__


XAmzTarget3AwsStepFunctionsOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsStepFunctionsOperationsApi | str, open_enum_validator(XAmzTarget3AwsStepFunctionsOperationsApi)
]
