from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1AmazonRekognitionFaceLivenessApi(str, Enum):
    """The types of challenges that have been selected for the Face Liveness session."""

    FACE_MOVEMENT_AND_LIGHT_CHALLENGE = "FaceMovementAndLightChallenge"
    FACE_MOVEMENT_CHALLENGE = "FaceMovementChallenge"

    __str__ = str.__str__


Type1AmazonRekognitionFaceLivenessApiOrStr: TypeAlias = Annotated[
    Type1AmazonRekognitionFaceLivenessApi | str, open_enum_validator(Type1AmazonRekognitionFaceLivenessApi)
]
