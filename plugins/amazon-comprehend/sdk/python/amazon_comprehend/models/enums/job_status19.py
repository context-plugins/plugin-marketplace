from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus19(str, Enum):
    """The status of the job. SUBMITTED - The job has been received and is queued for processing. IN_PROGRESS - Amazon
    Comprehend is processing the job. COMPLETED - The job was successfully completed and the output is available. FAILED
    - The job did not complete. To get details, use the operation."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus19OrStr: TypeAlias = Annotated[JobStatus19 | str, open_enum_validator(JobStatus19)]
