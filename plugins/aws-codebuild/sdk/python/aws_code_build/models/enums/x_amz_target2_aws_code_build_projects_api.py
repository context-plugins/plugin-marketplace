from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCodeBuildProjectsApi(str, Enum):
    CODE_BUILD_20161006_DELETE_PROJECT = "CodeBuild_20161006.DeleteProject"

    __str__ = str.__str__


XAmzTarget2AwsCodeBuildProjectsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCodeBuildProjectsApi | str, open_enum_validator(XAmzTarget2AwsCodeBuildProjectsApi)
]
