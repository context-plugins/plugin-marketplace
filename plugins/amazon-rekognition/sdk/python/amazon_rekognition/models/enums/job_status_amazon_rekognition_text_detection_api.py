from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatusAmazonRekognitionTextDetectionApi(str, Enum):
    """Current status of the text detection job."""

    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


JobStatusAmazonRekognitionTextDetectionApiOrStr: TypeAlias = Annotated[
    JobStatusAmazonRekognitionTextDetectionApi | str, open_enum_validator(JobStatusAmazonRekognitionTextDetectionApi)
]
