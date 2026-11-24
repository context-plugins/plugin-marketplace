from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionFaceSearchApi(str, Enum):
    REKOGNITION_SERVICE_START_FACE_SEARCH = "RekognitionService.StartFaceSearch"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionFaceSearchApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionFaceSearchApi | str, open_enum_validator(XAmzTarget1AmazonRekognitionFaceSearchApi)
]
