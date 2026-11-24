from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6AmazonRekognitionStreamProcessorApi(str, Enum):
    REKOGNITION_SERVICE_UPDATE_STREAM_PROCESSOR = "RekognitionService.UpdateStreamProcessor"

    __str__ = str.__str__


XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr: TypeAlias = Annotated[
    XAmzTarget6AmazonRekognitionStreamProcessorApi | str,
    open_enum_validator(XAmzTarget6AmazonRekognitionStreamProcessorApi),
]
