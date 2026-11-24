from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConditionSetStatus(str, Enum):
    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


ConditionSetStatusOrStr: TypeAlias = Annotated[ConditionSetStatus | str, open_enum_validator(ConditionSetStatus)]
