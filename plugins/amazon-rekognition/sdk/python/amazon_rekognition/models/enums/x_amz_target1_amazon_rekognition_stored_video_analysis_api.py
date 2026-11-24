from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi(str, Enum):
    REKOGNITION_SERVICE_START_LABEL_DETECTION = "RekognitionService.StartLabelDetection"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi | str,
    open_enum_validator(XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi),
]
