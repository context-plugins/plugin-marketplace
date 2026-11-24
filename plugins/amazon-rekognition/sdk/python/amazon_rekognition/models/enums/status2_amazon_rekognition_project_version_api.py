from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2AmazonRekognitionProjectVersionApi(str, Enum):
    """The current running status of the model."""

    TRAINING_IN_PROGRESS = "TRAINING_IN_PROGRESS"
    TRAINING_COMPLETED = "TRAINING_COMPLETED"
    TRAINING_FAILED = "TRAINING_FAILED"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    DELETING = "DELETING"
    COPYING_IN_PROGRESS = "COPYING_IN_PROGRESS"
    COPYING_COMPLETED = "COPYING_COMPLETED"
    COPYING_FAILED = "COPYING_FAILED"
    DEPRECATED = "DEPRECATED"
    EXPIRED = "EXPIRED"

    __str__ = str.__str__


Status2AmazonRekognitionProjectVersionApiOrStr: TypeAlias = Annotated[
    Status2AmazonRekognitionProjectVersionApi | str, open_enum_validator(Status2AmazonRekognitionProjectVersionApi)
]
