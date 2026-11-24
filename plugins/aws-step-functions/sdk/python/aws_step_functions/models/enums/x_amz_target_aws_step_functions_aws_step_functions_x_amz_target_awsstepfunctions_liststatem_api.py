from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi(str, Enum):
    AWS_STEP_FUNCTIONS_LIST_STATE_MACHINE_VERSIONS = "AWSStepFunctions.ListStateMachineVersions"

    __str__ = str.__str__


XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi | str,
    open_enum_validator(XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi),
]
