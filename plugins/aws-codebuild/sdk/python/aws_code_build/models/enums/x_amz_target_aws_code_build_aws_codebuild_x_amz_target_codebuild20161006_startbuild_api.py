from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi(str, Enum):
    CODE_BUILD_20161006_START_BUILD = "CodeBuild_20161006.StartBuild"

    __str__ = str.__str__


XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi | str,
    open_enum_validator(XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi),
]
