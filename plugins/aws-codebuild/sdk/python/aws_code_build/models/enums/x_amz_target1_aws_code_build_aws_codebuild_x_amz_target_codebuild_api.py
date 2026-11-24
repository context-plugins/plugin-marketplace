from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    CODE_BUILD_20161006_BATCH_GET_BUILDS = "CodeBuild_20161006.BatchGetBuilds"

    __str__ = str.__str__


XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
