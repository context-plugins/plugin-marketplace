from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT = "CodeBuild_20161006.ListBuildsForProject"

    __str__ = str.__str__


XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
