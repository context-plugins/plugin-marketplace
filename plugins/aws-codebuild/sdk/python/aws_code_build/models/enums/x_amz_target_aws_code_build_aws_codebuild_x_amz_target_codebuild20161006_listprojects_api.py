from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi(str, Enum):
    CODE_BUILD_20161006_LIST_PROJECTS = "CodeBuild_20161006.ListProjects"

    __str__ = str.__str__


XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi | str,
    open_enum_validator(XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi),
]
