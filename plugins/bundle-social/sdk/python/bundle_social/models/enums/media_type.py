from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaType(str, Enum):
    VIDEO = "VIDEO"
    IMAGE = "IMAGE"

    __str__ = str.__str__


MediaTypeOrStr: TypeAlias = Annotated[MediaType | str, open_enum_validator(MediaType)]
