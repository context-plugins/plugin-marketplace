from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsStepFunctionsStateMachinesApi(str, Enum):
    AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE = "AWSStepFunctions.CreateStateMachine"

    __str__ = str.__str__


XAmzTargetAwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsStepFunctionsStateMachinesApi | str, open_enum_validator(XAmzTargetAwsStepFunctionsStateMachinesApi)
]
