from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    """A code identifying the condition that was detected during the Face Liveness session."""

    FACE_NOT_VISIBLE = "FACE_NOT_VISIBLE"
    FACE_OBSTRUCTION_DETECTED = "FACE_OBSTRUCTION_DETECTED"
    LOW_VIDEO_QUALITY_DETECTED = "LOW_VIDEO_QUALITY_DETECTED"
    FACE_NOT_ALIGNED = "FACE_NOT_ALIGNED"
    EYES_CLOSED_DETECTED = "EYES_CLOSED_DETECTED"
    LOW_LIGHTING_DETECTED = "LOW_LIGHTING_DETECTED"
    HIGH_LIGHTING_DETECTED = "HIGH_LIGHTING_DETECTED"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
