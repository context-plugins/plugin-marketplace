from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PhotoType(str, Enum):
    INTERIOR = "interior"
    EXTERIOR = "exterior"
    ENGINE = "engine"

    __str__ = str.__str__


PhotoTypeOrStr: TypeAlias = Annotated[PhotoType | str, open_enum_validator(PhotoType)]
