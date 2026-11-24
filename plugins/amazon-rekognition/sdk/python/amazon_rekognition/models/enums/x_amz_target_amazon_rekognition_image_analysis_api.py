from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionImageAnalysisApi(str, Enum):
    REKOGNITION_SERVICE_DETECT_LABELS = "RekognitionService.DetectLabels"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionImageAnalysisApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionImageAnalysisApi | str, open_enum_validator(XAmzTargetAmazonRekognitionImageAnalysisApi)
]
