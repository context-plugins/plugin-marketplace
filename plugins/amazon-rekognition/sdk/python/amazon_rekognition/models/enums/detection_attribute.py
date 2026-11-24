from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DetectionAttribute(str, Enum):
    DEFAULT = "DEFAULT"
    ALL = "ALL"
    AGE_RANGE = "AGE_RANGE"
    BEARD = "BEARD"
    EMOTIONS = "EMOTIONS"
    EYE_DIRECTION = "EYE_DIRECTION"
    EYEGLASSES = "EYEGLASSES"
    EYES_OPEN = "EYES_OPEN"
    GENDER = "GENDER"
    MOUTH_OPEN = "MOUTH_OPEN"
    MUSTACHE = "MUSTACHE"
    FACE_OCCLUDED = "FACE_OCCLUDED"
    SMILE = "SMILE"
    SUNGLASSES = "SUNGLASSES"

    __str__ = str.__str__


DetectionAttributeOrStr: TypeAlias = Annotated[DetectionAttribute | str, open_enum_validator(DetectionAttribute)]
