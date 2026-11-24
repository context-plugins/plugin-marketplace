from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatusAmazonRekognitionStoredVideoAnalysisApi(str, Enum):
    """The current status of the label detection job."""

    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


JobStatusAmazonRekognitionStoredVideoAnalysisApiOrStr: TypeAlias = Annotated[
    JobStatusAmazonRekognitionStoredVideoAnalysisApi | str,
    open_enum_validator(JobStatusAmazonRekognitionStoredVideoAnalysisApi),
]
