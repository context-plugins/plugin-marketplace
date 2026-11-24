from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi(str, Enum):
    AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE_VERSION = "AWSStepFunctions.DeleteStateMachineVersion"

    __str__ = str.__str__


XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi | str,
    open_enum_validator(XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi),
]
