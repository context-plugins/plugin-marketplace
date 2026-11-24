from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi(str, Enum):
    AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_ALIAS = "AWSStepFunctions.DescribeStateMachineAlias"

    __str__ = str.__str__


XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi | str,
    open_enum_validator(XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi),
]
