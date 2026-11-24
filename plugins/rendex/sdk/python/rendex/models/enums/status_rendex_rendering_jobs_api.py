from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRendexRenderingJobsApi(str, Enum):
    """Overall batch status"""

    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


StatusRendexRenderingJobsApiOrStr: TypeAlias = Annotated[
    StatusRendexRenderingJobsApi | str, open_enum_validator(StatusRendexRenderingJobsApi)
]
