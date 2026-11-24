from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Dir(str, Enum):
    ASC = "asc"
    DESC = "desc"

    __str__ = str.__str__


DirOrStr: TypeAlias = Annotated[Dir | str, open_enum_validator(Dir)]
