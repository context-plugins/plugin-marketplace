from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionFaceSearchApi(str, Enum):
    REKOGNITION_SERVICE_SEARCH_FACES_BY_IMAGE = "RekognitionService.SearchFacesByImage"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionFaceSearchApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionFaceSearchApi | str, open_enum_validator(XAmzTarget2AmazonRekognitionFaceSearchApi)
]
