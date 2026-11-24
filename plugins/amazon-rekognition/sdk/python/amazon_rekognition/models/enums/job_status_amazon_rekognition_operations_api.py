from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatusAmazonRekognitionOperationsApi(str, Enum):
    """The current status of the face detection job."""

    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


JobStatusAmazonRekognitionOperationsApiOrStr: TypeAlias = Annotated[
    JobStatusAmazonRekognitionOperationsApi | str, open_enum_validator(JobStatusAmazonRekognitionOperationsApi)
]
