from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi(str, Enum):
    AWS_STEP_FUNCTIONS_PUBLISH_STATE_MACHINE_VERSION = "AWSStepFunctions.PublishStateMachineVersion"

    __str__ = str.__str__


XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi | str,
    open_enum_validator(XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi),
]
