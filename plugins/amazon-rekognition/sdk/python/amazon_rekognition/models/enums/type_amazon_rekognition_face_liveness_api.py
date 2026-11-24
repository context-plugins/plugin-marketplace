from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAmazonRekognitionFaceLivenessApi(str, Enum):
    """The type of the challenge being used for the Face Liveness session."""

    FACE_MOVEMENT_AND_LIGHT_CHALLENGE = "FaceMovementAndLightChallenge"
    FACE_MOVEMENT_CHALLENGE = "FaceMovementChallenge"

    __str__ = str.__str__


TypeAmazonRekognitionFaceLivenessApiOrStr: TypeAlias = Annotated[
    TypeAmazonRekognitionFaceLivenessApi | str, open_enum_validator(TypeAmazonRekognitionFaceLivenessApi)
]
