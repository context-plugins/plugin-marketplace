from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonRekognitionStreamProcessorApi(str, Enum):
    REKOGNITION_SERVICE_LIST_STREAM_PROCESSORS = "RekognitionService.ListStreamProcessors"

    __str__ = str.__str__


XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonRekognitionStreamProcessorApi | str,
    open_enum_validator(XAmzTarget3AmazonRekognitionStreamProcessorApi),
]
