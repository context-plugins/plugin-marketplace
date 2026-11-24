from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataStandardSortFieldDto(str, Enum):
    NAME = "name"
    LABEL = "label"

    __str__ = str.__str__


DataStandardSortFieldDtoOrStr: TypeAlias = Annotated[
    DataStandardSortFieldDto | str, open_enum_validator(DataStandardSortFieldDto)
]
