from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NotificationFilterTypeDto(str, Enum):
    EQUALS = "equals"
    CONTAINS = "contains"
    IN = "in"
    AND = "and"
    OR = "or"
    NOT = "not"

    __str__ = str.__str__


NotificationFilterTypeDtoOrStr: TypeAlias = Annotated[
    NotificationFilterTypeDto | str, open_enum_validator(NotificationFilterTypeDto)
]
