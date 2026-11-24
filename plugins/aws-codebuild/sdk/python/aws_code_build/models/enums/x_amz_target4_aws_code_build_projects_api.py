from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsCodeBuildProjectsApi(str, Enum):
    CODE_BUILD_20161006_UPDATE_PROJECT = "CodeBuild_20161006.UpdateProject"

    __str__ = str.__str__


XAmzTarget4AwsCodeBuildProjectsApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsCodeBuildProjectsApi | str, open_enum_validator(XAmzTarget4AwsCodeBuildProjectsApi)
]
