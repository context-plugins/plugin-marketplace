from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonRekognitionStreamProcessorApi(str, Enum):
    REKOGNITION_SERVICE_DELETE_STREAM_PROCESSOR = "RekognitionService.DeleteStreamProcessor"

    __str__ = str.__str__


XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonRekognitionStreamProcessorApi | str,
    open_enum_validator(XAmzTarget1AmazonRekognitionStreamProcessorApi),
]
