from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionContentModerationApi(str, Enum):
    REKOGNITION_SERVICE_START_CONTENT_MODERATION = "RekognitionService.StartContentModeration"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionContentModerationApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionContentModerationApi | str,
    open_enum_validator(XAmzTarget1AmazonRekognitionContentModerationApi),
]
