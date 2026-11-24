from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionFaceLivenessApi(str, Enum):
    REKOGNITION_SERVICE_CREATE_FACE_LIVENESS_SESSION = "RekognitionService.CreateFaceLivenessSession"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionFaceLivenessApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionFaceLivenessApi | str, open_enum_validator(XAmzTargetAmazonRekognitionFaceLivenessApi)
]
