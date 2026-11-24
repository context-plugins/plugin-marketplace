from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi(str, Enum):
    CODE_BUILD_20161006_LIST_BUILDS = "CodeBuild_20161006.ListBuilds"

    __str__ = str.__str__


XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi | str,
    open_enum_validator(XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi),
]
