from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5AmazonRekognitionOperationsApi(str, Enum):
    REKOGNITION_SERVICE_DETECT_MODERATION_LABELS = "RekognitionService.DetectModerationLabels"

    __str__ = str.__str__


XAmzTarget5AmazonRekognitionOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget5AmazonRekognitionOperationsApi | str, open_enum_validator(XAmzTarget5AmazonRekognitionOperationsApi)
]
