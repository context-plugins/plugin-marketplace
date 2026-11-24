from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonRekognitionStreamProcessorApi(str, Enum):
    REKOGNITION_SERVICE_CREATE_STREAM_PROCESSOR = "RekognitionService.CreateStreamProcessor"

    __str__ = str.__str__


XAmzTargetAmazonRekognitionStreamProcessorApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonRekognitionStreamProcessorApi | str,
    open_enum_validator(XAmzTargetAmazonRekognitionStreamProcessorApi),
]
