from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi(str, Enum):
    AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE_ALIAS = "AWSStepFunctions.UpdateStateMachineAlias"

    __str__ = str.__str__


XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi | str,
    open_enum_validator(XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi),
]
