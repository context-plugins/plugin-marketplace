from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonRekognitionStreamProcessorApi(str, Enum):
    REKOGNITION_SERVICE_START_STREAM_PROCESSOR = "RekognitionService.StartStreamProcessor"

    __str__ = str.__str__


XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonRekognitionStreamProcessorApi | str,
    open_enum_validator(XAmzTarget4AmazonRekognitionStreamProcessorApi),
]
