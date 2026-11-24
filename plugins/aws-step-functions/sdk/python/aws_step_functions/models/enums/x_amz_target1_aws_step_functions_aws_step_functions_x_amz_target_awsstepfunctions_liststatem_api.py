from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi(str, Enum):
    AWS_STEP_FUNCTIONS_LIST_STATE_MACHINE_ALIASES = "AWSStepFunctions.ListStateMachineAliases"

    __str__ = str.__str__


XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi | str,
    open_enum_validator(XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi),
]
