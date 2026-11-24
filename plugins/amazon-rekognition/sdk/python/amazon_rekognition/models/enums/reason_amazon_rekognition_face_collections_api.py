from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReasonAmazonRekognitionFaceCollectionsApi(str, Enum):
    EXCEEDS_MAX_FACES = "EXCEEDS_MAX_FACES"
    EXTREME_POSE = "EXTREME_POSE"
    LOW_BRIGHTNESS = "LOW_BRIGHTNESS"
    LOW_SHARPNESS = "LOW_SHARPNESS"
    LOW_CONFIDENCE = "LOW_CONFIDENCE"
    SMALL_BOUNDING_BOX = "SMALL_BOUNDING_BOX"
    LOW_FACE_QUALITY = "LOW_FACE_QUALITY"

    __str__ = str.__str__


ReasonAmazonRekognitionFaceCollectionsApiOrStr: TypeAlias = Annotated[
    ReasonAmazonRekognitionFaceCollectionsApi | str, open_enum_validator(ReasonAmazonRekognitionFaceCollectionsApi)
]
