from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    """The status of the build group. FAILED The build group failed. FAULT The build group faulted. IN_PROGRESS The
    build group is still in progress. STOPPED The build group stopped. SUCCEEDED The build group succeeded. TIMED_OUT
    The build group timed out."""

    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    FAULT = "FAULT"
    TIMED_OUT = "TIMED_OUT"
    IN_PROGRESS = "IN_PROGRESS"
    STOPPED = "STOPPED"

    __str__ = str.__str__


BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
