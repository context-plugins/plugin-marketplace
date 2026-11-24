from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConditionSetStatus1(str, Enum):
    """Whether the condition set is currently active or has been archived."""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


ConditionSetStatus1OrStr: TypeAlias = Annotated[ConditionSetStatus1 | str, open_enum_validator(ConditionSetStatus1)]
