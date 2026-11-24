from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStatus20(str, Enum):
    """The status of the job. SUBMITTED - The job has been received and is queued for processing. IN_PROGRESS - Amazon
    Comprehend is processing the job. COMPLETED - The job was successfully completed and the output is available. FAILED
    - The job did not complete. To get details, use the operation. STOP_REQUESTED - Amazon Comprehend has received a
    stop request for the job and is processing the request. STOPPED - The job was successfully stopped without
    completing."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


JobStatus20OrStr: TypeAlias = Annotated[JobStatus20 | str, open_enum_validator(JobStatus20)]
