from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionContentModerationApi(str, Enum):
    REKOGNITION_SERVICE_GET_CONTENT_MODERATION = "RekognitionService.GetContentModeration"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionContentModerationApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionContentModerationApi | str,
    open_enum_validator(XAmzTargetAmazonRekognitionContentModerationApi),
]
