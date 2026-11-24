from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionContentModerationApi(str, Enum):
    REKOGNITION_SERVICE_DETECT_MODERATION_LABELS = "RekognitionService.DetectModerationLabels"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionContentModerationApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionContentModerationApi | str,
    open_enum_validator(XAmzTarget2AmazonRekognitionContentModerationApi),
]
