from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonRekognitionStreamProcessorApi(str, Enum):
    REKOGNITION_SERVICE_DESCRIBE_STREAM_PROCESSOR = "RekognitionService.DescribeStreamProcessor"

    __str__ = str.__str__


XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonRekognitionStreamProcessorApi | str,
    open_enum_validator(XAmzTarget2AmazonRekognitionStreamProcessorApi),
]
