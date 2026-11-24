from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionTextDetectionApi(str, Enum):
    REKOGNITION_SERVICE_START_TEXT_DETECTION = "RekognitionService.StartTextDetection"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionTextDetectionApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionTextDetectionApi | str,
    open_enum_validator(XAmzTarget1AmazonRekognitionTextDetectionApi),
]
