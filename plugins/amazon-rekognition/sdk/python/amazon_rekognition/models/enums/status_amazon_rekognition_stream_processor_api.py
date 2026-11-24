from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonRekognitionStreamProcessorApi(str, Enum):
    """Current status of the stream processor."""

    STOPPED = "STOPPED"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    STOPPING = "STOPPING"
    UPDATING = "UPDATING"

    __str__ = str.__str__


StatusAmazonRekognitionStreamProcessorApiOrStr: TypeAlias = Annotated[
    StatusAmazonRekognitionStreamProcessorApi | str, open_enum_validator(StatusAmazonRekognitionStreamProcessorApi)
]
