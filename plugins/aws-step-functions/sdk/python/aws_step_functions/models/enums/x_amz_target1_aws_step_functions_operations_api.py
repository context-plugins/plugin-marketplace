from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsStepFunctionsOperationsApi(str, Enum):
    AWS_STEP_FUNCTIONS_REDRIVE_EXECUTION = "AWSStepFunctions.RedriveExecution"

    __str__ = str.__str__


XAmzTarget1AwsStepFunctionsOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsStepFunctionsOperationsApi | str, open_enum_validator(XAmzTarget1AwsStepFunctionsOperationsApi)
]
