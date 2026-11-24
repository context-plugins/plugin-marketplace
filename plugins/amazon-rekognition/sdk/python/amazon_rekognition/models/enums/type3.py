from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3(str, Enum):
    """The type of detected PPE."""

    FACE_COVER = "FACE_COVER"
    HAND_COVER = "HAND_COVER"
    HEAD_COVER = "HEAD_COVER"

    __str__ = str.__str__


Type3OrStr: TypeAlias = Annotated[Type3 | str, open_enum_validator(Type3)]
