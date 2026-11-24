from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GroupType(str, Enum):
    """Optional. The logic operator between filters of the same group."""

    AND = "AND"

    __str__ = str.__str__


GroupTypeOrStr: TypeAlias = Annotated[GroupType | str, open_enum_validator(GroupType)]
