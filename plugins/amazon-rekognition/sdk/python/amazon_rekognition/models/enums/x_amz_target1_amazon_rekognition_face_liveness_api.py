from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionFaceLivenessApi(str, Enum):
    REKOGNITION_SERVICE_GET_FACE_LIVENESS_SESSION_RESULTS = "RekognitionService.GetFaceLivenessSessionResults"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionFaceLivenessApi | str, open_enum_validator(XAmzTarget1AmazonRekognitionFaceLivenessApi)
]
