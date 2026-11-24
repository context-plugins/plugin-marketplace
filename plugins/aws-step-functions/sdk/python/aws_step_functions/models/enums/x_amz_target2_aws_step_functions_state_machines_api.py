from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsStepFunctionsStateMachinesApi(str, Enum):
    AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE = "AWSStepFunctions.DescribeStateMachine"

    __str__ = str.__str__


XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsStepFunctionsStateMachinesApi | str, open_enum_validator(XAmzTarget2AwsStepFunctionsStateMachinesApi)
]
