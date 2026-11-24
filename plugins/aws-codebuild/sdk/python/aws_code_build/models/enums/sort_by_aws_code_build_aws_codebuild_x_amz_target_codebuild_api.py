from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    """Specifies how the results are sorted. Possible values are: FILE_PATH The results are sorted by file path.
    LINE_COVERAGE_PERCENTAGE The results are sorted by the percentage of lines that are covered."""

    LINE_COVERAGE_PERCENTAGE = "LINE_COVERAGE_PERCENTAGE"
    FILE_PATH = "FILE_PATH"

    __str__ = str.__str__


SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
