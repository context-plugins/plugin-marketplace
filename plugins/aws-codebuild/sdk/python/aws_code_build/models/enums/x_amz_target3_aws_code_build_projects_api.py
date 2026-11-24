from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsCodeBuildProjectsApi(str, Enum):
    CODE_BUILD_20161006_LIST_PROJECTS = "CodeBuild_20161006.ListProjects"

    __str__ = str.__str__


XAmzTarget3AwsCodeBuildProjectsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsCodeBuildProjectsApi | str, open_enum_validator(XAmzTarget3AwsCodeBuildProjectsApi)
]
