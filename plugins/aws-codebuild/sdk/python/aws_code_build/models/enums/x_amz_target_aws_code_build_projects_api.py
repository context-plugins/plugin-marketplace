from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCodeBuildProjectsApi(str, Enum):
    CODE_BUILD_20161006_BATCH_GET_PROJECTS = "CodeBuild_20161006.BatchGetProjects"

    __str__ = str.__str__


XAmzTargetAwsCodeBuildProjectsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCodeBuildProjectsApi | str, open_enum_validator(XAmzTargetAwsCodeBuildProjectsApi)
]
