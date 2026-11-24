from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsStepFunctionsOperationsApi(str, Enum):
    AWS_STEP_FUNCTIONS_TEST_STATE = "AWSStepFunctions.TestState"

    __str__ = str.__str__


XAmzTarget2AwsStepFunctionsOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsStepFunctionsOperationsApi | str, open_enum_validator(XAmzTarget2AwsStepFunctionsOperationsApi)
]
