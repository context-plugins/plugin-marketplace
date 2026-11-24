from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAmazonRekognitionFaceCollectionsApi(str, Enum):
    """Type of emotion detected."""

    HAPPY = "HAPPY"
    SAD = "SAD"
    ANGRY = "ANGRY"
    CONFUSED = "CONFUSED"
    DISGUSTED = "DISGUSTED"
    SURPRISED = "SURPRISED"
    CALM = "CALM"
    UNKNOWN = "UNKNOWN"
    FEAR = "FEAR"

    __str__ = str.__str__


TypeAmazonRekognitionFaceCollectionsApiOrStr: TypeAlias = Annotated[
    TypeAmazonRekognitionFaceCollectionsApi | str, open_enum_validator(TypeAmazonRekognitionFaceCollectionsApi)
]
