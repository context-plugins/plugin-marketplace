from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GroupBy1(str, Enum):
    TAG_ID = "tagId"

    __str__ = str.__str__


GroupBy1OrStr: TypeAlias = Annotated[GroupBy1 | str, open_enum_validator(GroupBy1)]
