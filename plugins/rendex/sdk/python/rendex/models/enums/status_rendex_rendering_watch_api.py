from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRendexRenderingWatchApi(str, Enum):
    QUEUED = "queued"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


StatusRendexRenderingWatchApiOrStr: TypeAlias = Annotated[
    StatusRendexRenderingWatchApi | str, open_enum_validator(StatusRendexRenderingWatchApi)
]
