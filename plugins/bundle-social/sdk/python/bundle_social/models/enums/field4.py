from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Field4(str, Enum):
    MENUS = "menus"

    __str__ = str.__str__


Field4OrStr: TypeAlias = Annotated[Field4 | str, open_enum_validator(Field4)]
