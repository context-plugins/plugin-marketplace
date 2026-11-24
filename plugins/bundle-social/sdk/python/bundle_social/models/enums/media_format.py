from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaFormat(str, Enum):
    PHOTO = "PHOTO"
    VIDEO = "VIDEO"

    __str__ = str.__str__


MediaFormatOrStr: TypeAlias = Annotated[MediaFormat | str, open_enum_validator(MediaFormat)]
