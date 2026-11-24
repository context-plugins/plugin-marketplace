from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Field3(str, Enum):
    NAME = "name"
    MENUS = "menus"

    __str__ = str.__str__


Field3OrStr: TypeAlias = Annotated[Field3 | str, open_enum_validator(Field3)]
