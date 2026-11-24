from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatusAmazonRekognitionContentModerationApi(str, Enum):
    """The current status of the content moderation analysis job."""

    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


JobStatusAmazonRekognitionContentModerationApiOrStr: TypeAlias = Annotated[
    JobStatusAmazonRekognitionContentModerationApi | str,
    open_enum_validator(JobStatusAmazonRekognitionContentModerationApi),
]
