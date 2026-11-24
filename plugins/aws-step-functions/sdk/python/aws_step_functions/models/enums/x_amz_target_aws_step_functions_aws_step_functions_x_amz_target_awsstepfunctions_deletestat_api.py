from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi(str, Enum):
    AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE_ALIAS = "AWSStepFunctions.DeleteStateMachineAlias"

    __str__ = str.__str__


XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi | str,
    open_enum_validator(XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi),
]
