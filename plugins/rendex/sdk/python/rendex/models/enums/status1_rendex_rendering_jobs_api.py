from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1RendexRenderingJobsApi(str, Enum):
    QUEUED = "queued"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


Status1RendexRenderingJobsApiOrStr: TypeAlias = Annotated[
    Status1RendexRenderingJobsApi | str, open_enum_validator(Status1RendexRenderingJobsApi)
]
