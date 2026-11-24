from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5AwsStepFunctionsStateMachinesApi(str, Enum):
    AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE = "AWSStepFunctions.UpdateStateMachine"

    __str__ = str.__str__


XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    XAmzTarget5AwsStepFunctionsStateMachinesApi | str, open_enum_validator(XAmzTarget5AwsStepFunctionsStateMachinesApi)
]
