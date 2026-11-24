from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCodeBuildCommandExecutionApi(str, Enum):
    CODE_BUILD_20161006_BATCH_GET_COMMAND_EXECUTIONS = "CodeBuild_20161006.BatchGetCommandExecutions"

    __str__ = str.__str__


XAmzTargetAwsCodeBuildCommandExecutionApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCodeBuildCommandExecutionApi | str, open_enum_validator(XAmzTargetAwsCodeBuildCommandExecutionApi)
]
