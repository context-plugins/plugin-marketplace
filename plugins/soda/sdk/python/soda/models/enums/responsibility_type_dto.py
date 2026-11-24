from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResponsibilityTypeDto(str, Enum):
    USER = "user"
    USER_GROUP = "userGroup"

    __str__ = str.__str__


ResponsibilityTypeDtoOrStr: TypeAlias = Annotated[
    ResponsibilityTypeDto | str, open_enum_validator(ResponsibilityTypeDto)
]
