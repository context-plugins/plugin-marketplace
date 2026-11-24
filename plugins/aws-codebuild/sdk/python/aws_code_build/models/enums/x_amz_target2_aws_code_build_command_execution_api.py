from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCodeBuildCommandExecutionApi(str, Enum):
    CODE_BUILD_20161006_START_COMMAND_EXECUTION = "CodeBuild_20161006.StartCommandExecution"

    __str__ = str.__str__


XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCodeBuildCommandExecutionApi | str, open_enum_validator(XAmzTarget2AwsCodeBuildCommandExecutionApi)
]
