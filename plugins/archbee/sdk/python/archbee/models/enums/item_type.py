from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ItemType(str, Enum):
    DIRECTORY = "directory"
    IMAGE = "image"
    FILE = "file"

    __str__ = str.__str__


ItemTypeOrStr: TypeAlias = Annotated[ItemType | str, open_enum_validator(ItemType)]
