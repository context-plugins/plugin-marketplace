from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RequiredEquipmentType(str, Enum):
    FACE_COVER = "FACE_COVER"
    HAND_COVER = "HAND_COVER"
    HEAD_COVER = "HEAD_COVER"

    __str__ = str.__str__


RequiredEquipmentTypeOrStr: TypeAlias = Annotated[
    RequiredEquipmentType | str, open_enum_validator(RequiredEquipmentType)
]
