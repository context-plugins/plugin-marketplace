from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi(str, Enum):
    CODE_BUILD_20161006_STOP_BUILD = "CodeBuild_20161006.StopBuild"

    __str__ = str.__str__


XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi | str,
    open_enum_validator(XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi),
]
