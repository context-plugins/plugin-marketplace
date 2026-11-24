from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionTextDetectionApi(str, Enum):
    REKOGNITION_SERVICE_GET_TEXT_DETECTION = "RekognitionService.GetTextDetection"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionTextDetectionApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionTextDetectionApi | str, open_enum_validator(XAmzTargetAmazonRekognitionTextDetectionApi)
]
