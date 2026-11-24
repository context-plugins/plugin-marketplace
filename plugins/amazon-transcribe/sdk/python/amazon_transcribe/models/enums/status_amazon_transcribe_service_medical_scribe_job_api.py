from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonTranscribeServiceMedicalScribeJobApi(str, Enum):
    """Returns only Medical Scribe jobs with the specified status. Jobs are ordered by creation date, with the newest
    job first. If you do not include Status, all Medical Scribe jobs are returned."""

    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


StatusAmazonTranscribeServiceMedicalScribeJobApiOrStr: TypeAlias = Annotated[
    StatusAmazonTranscribeServiceMedicalScribeJobApi | str,
    open_enum_validator(StatusAmazonTranscribeServiceMedicalScribeJobApi),
]
