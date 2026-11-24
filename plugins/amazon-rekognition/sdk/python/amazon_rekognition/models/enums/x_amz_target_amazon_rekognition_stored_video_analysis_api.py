from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionStoredVideoAnalysisApi(str, Enum):
    REKOGNITION_SERVICE_GET_LABEL_DETECTION = "RekognitionService.GetLabelDetection"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionStoredVideoAnalysisApi | str,
    open_enum_validator(XAmzTargetAmazonRekognitionStoredVideoAnalysisApi),
]
