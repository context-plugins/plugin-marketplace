from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    """Specifies if the results are sorted in ascending or descending order."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
