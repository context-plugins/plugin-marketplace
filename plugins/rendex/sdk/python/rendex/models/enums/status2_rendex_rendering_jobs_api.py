from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2RendexRenderingJobsApi(str, Enum):
    """Current job status"""

    QUEUED = "queued"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


Status2RendexRenderingJobsApiOrStr: TypeAlias = Annotated[
    Status2RendexRenderingJobsApi | str, open_enum_validator(Status2RendexRenderingJobsApi)
]
