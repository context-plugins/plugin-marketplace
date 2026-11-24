from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrderAwsCodeBuildCommandExecutionApi(str, Enum):
    """The order in which sandbox records should be retrieved."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrderAwsCodeBuildCommandExecutionApiOrStr: TypeAlias = Annotated[
    SortOrderAwsCodeBuildCommandExecutionApi | str, open_enum_validator(SortOrderAwsCodeBuildCommandExecutionApi)
]
