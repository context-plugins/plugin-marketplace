from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi(str, Enum):
    """The status used to filter reports. You can filter using one status only."""

    GENERATING = "GENERATING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    INCOMPLETE = "INCOMPLETE"
    DELETING = "DELETING"

    __str__ = str.__str__


StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr: TypeAlias = Annotated[
    StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi | str,
    open_enum_validator(StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi),
]
