from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionCustomLabelsApi(str, Enum):
    REKOGNITION_SERVICE_DETECT_CUSTOM_LABELS = "RekognitionService.DetectCustomLabels"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionCustomLabelsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionCustomLabelsApi | str, open_enum_validator(XAmzTargetAmazonRekognitionCustomLabelsApi)
]
