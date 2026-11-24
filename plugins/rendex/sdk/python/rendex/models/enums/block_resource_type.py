from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BlockResourceType(str, Enum):
    FONT = "font"
    IMAGE = "image"
    MEDIA = "media"
    STYLESHEET = "stylesheet"
    OTHER = "other"

    __str__ = str.__str__


BlockResourceTypeOrStr: TypeAlias = Annotated[BlockResourceType | str, open_enum_validator(BlockResourceType)]
