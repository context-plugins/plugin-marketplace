from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataStandardStatusDto(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    PAUSED = "paused"
    INVALID = "invalid"

    __str__ = str.__str__


DataStandardStatusDtoOrStr: TypeAlias = Annotated[
    DataStandardStatusDto | str, open_enum_validator(DataStandardStatusDto)
]
