from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonRekognitionFaceLivenessApi(str, Enum):
    """Represents a status corresponding to the state of the session. Possible statuses are: CREATED, IN_PROGRESS,
    SUCCEEDED, FAILED, EXPIRED."""

    CREATED = "CREATED"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    EXPIRED = "EXPIRED"

    __str__ = str.__str__


StatusAmazonRekognitionFaceLivenessApiOrStr: TypeAlias = Annotated[
    StatusAmazonRekognitionFaceLivenessApi | str, open_enum_validator(StatusAmazonRekognitionFaceLivenessApi)
]
