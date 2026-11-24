from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionFaceApi(str, Enum):
    REKOGNITION_SERVICE_DELETE_FACES = "RekognitionService.DeleteFaces"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionFaceApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionFaceApi | str, open_enum_validator(XAmzTarget1AmazonRekognitionFaceApi)
]
