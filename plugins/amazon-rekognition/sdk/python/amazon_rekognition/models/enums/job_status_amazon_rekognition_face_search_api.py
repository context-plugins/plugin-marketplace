from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatusAmazonRekognitionFaceSearchApi(str, Enum):
    """The current status of the face search job."""

    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


JobStatusAmazonRekognitionFaceSearchApiOrStr: TypeAlias = Annotated[
    JobStatusAmazonRekognitionFaceSearchApi | str, open_enum_validator(JobStatusAmazonRekognitionFaceSearchApi)
]
