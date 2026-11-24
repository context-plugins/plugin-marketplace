from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5AmazonRekognitionStreamProcessorApi(str, Enum):
    REKOGNITION_SERVICE_STOP_STREAM_PROCESSOR = "RekognitionService.StopStreamProcessor"

    __str__ = str.__str__


XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr: TypeAlias = Annotated[
    XAmzTarget5AmazonRekognitionStreamProcessorApi | str,
    open_enum_validator(XAmzTarget5AmazonRekognitionStreamProcessorApi),
]
