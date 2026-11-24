from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionOperationsApi(str, Enum):
    REKOGNITION_SERVICE_DETECT_CUSTOM_LABELS = "RekognitionService.DetectCustomLabels"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionOperationsApi | str, open_enum_validator(XAmzTarget2AmazonRekognitionOperationsApi)
]
