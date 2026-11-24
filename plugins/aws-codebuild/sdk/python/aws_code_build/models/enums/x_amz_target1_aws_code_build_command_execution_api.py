from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCodeBuildCommandExecutionApi(str, Enum):
    CODE_BUILD_20161006_LIST_COMMAND_EXECUTIONS_FOR_SANDBOX = "CodeBuild_20161006.ListCommandExecutionsForSandbox"

    __str__ = str.__str__


XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCodeBuildCommandExecutionApi | str, open_enum_validator(XAmzTarget1AwsCodeBuildCommandExecutionApi)
]
