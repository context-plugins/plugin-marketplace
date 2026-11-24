from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaType(str, Enum):
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    CAROUSEL_ALBUM = "CAROUSEL_ALBUM"
    REELS = "REELS"
    STORIES = "STORIES"

    __str__ = str.__str__


MediaTypeOrStr: TypeAlias = Annotated[MediaType | str, open_enum_validator(MediaType)]
