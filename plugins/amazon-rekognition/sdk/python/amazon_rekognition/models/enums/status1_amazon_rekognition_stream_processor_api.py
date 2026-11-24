from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1AmazonRekognitionStreamProcessorApi(str, Enum):
    """Current status of the Amazon Rekognition stream processor."""

    STOPPED = "STOPPED"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    STOPPING = "STOPPING"
    UPDATING = "UPDATING"

    __str__ = str.__str__


Status1AmazonRekognitionStreamProcessorApiOrStr: TypeAlias = Annotated[
    Status1AmazonRekognitionStreamProcessorApi | str, open_enum_validator(Status1AmazonRekognitionStreamProcessorApi)
]
