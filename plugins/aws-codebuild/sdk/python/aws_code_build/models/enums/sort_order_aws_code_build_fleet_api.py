from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrderAwsCodeBuildFleetApi(str, Enum):
    """The order in which to list compute fleets. Valid values include: ASCENDING: List in ascending order. DESCENDING:
    List in descending order. Use sortBy to specify the criterion to be used to list compute fleet names."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrderAwsCodeBuildFleetApiOrStr: TypeAlias = Annotated[
    SortOrderAwsCodeBuildFleetApi | str, open_enum_validator(SortOrderAwsCodeBuildFleetApi)
]
