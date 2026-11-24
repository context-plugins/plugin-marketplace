from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaType(str, Enum):
    IMAGE_JPEG = "image/jpeg"
    IMAGE_PNG = "image/png"
    IMAGE_GIF = "image/gif"
    IMAGE_WEBP = "image/webp"

    __str__ = str.__str__


MediaTypeOrStr: TypeAlias = Annotated[MediaType | str, open_enum_validator(MediaType)]
