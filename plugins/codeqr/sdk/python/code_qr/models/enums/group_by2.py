from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GroupBy2(str, Enum):
    USER_ID = "userId"

    __str__ = str.__str__


GroupBy2OrStr: TypeAlias = Annotated[GroupBy2 | str, open_enum_validator(GroupBy2)]
