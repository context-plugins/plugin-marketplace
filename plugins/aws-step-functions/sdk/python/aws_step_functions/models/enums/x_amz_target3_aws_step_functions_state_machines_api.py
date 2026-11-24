from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsStepFunctionsStateMachinesApi(str, Enum):
    AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_FOR_EXECUTION = "AWSStepFunctions.DescribeStateMachineForExecution"

    __str__ = str.__str__


XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsStepFunctionsStateMachinesApi | str, open_enum_validator(XAmzTarget3AwsStepFunctionsStateMachinesApi)
]
