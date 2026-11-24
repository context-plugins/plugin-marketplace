from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsStepFunctionsStateMachinesApi(str, Enum):
    AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE = "AWSStepFunctions.DeleteStateMachine"

    __str__ = str.__str__


XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsStepFunctionsStateMachinesApi | str, open_enum_validator(XAmzTarget1AwsStepFunctionsStateMachinesApi)
]
