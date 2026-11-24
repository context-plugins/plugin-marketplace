from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCodeBuildProjectsApi(str, Enum):
    CODE_BUILD_20161006_CREATE_PROJECT = "CodeBuild_20161006.CreateProject"

    __str__ = str.__str__


XAmzTarget1AwsCodeBuildProjectsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCodeBuildProjectsApi | str, open_enum_validator(XAmzTarget1AwsCodeBuildProjectsApi)
]
