from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsStepFunctionsStateMachinesApi(str, Enum):
    AWS_STEP_FUNCTIONS_LIST_STATE_MACHINES = "AWSStepFunctions.ListStateMachines"

    __str__ = str.__str__


XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsStepFunctionsStateMachinesApi | str, open_enum_validator(XAmzTarget4AwsStepFunctionsStateMachinesApi)
]
