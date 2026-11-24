from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi(str, Enum):
    """Specifies the sort order for the list of returned reports. Valid values are: ASCENDING: return reports in
    chronological order based on their creation date. DESCENDING: return reports in the reverse chronological order
    based on their creation date."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr: TypeAlias = Annotated[
    SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi | str,
    open_enum_validator(SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi),
]
