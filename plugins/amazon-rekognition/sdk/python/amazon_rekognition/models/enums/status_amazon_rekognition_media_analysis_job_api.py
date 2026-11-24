from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonRekognitionMediaAnalysisJobApi(str, Enum):
    """The current status of the media analysis job."""

    CREATED = "CREATED"
    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


StatusAmazonRekognitionMediaAnalysisJobApiOrStr: TypeAlias = Annotated[
    StatusAmazonRekognitionMediaAnalysisJobApi | str, open_enum_validator(StatusAmazonRekognitionMediaAnalysisJobApi)
]
