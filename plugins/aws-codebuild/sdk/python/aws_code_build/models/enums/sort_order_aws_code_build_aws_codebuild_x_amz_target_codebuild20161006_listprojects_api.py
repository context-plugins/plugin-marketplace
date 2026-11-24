from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi(str, Enum):
    """The order in which to list build projects. Valid values include: ASCENDING: List in ascending order. DESCENDING:
    List in descending order. Use sortBy to specify the criterion to be used to list build project names."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiOrStr: TypeAlias = Annotated[
    SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi | str,
    open_enum_validator(SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi),
]
