from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionTextDetectionApi(str, Enum):
    REKOGNITION_SERVICE_DETECT_TEXT = "RekognitionService.DetectText"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionTextDetectionApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionTextDetectionApi | str,
    open_enum_validator(XAmzTarget2AmazonRekognitionTextDetectionApi),
]
