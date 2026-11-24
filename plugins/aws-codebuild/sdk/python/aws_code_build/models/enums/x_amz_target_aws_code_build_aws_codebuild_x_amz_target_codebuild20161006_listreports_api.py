from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi(str, Enum):
    CODE_BUILD_20161006_LIST_REPORTS = "CodeBuild_20161006.ListReports"

    __str__ = str.__str__


XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi | str,
    open_enum_validator(XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi),
]
