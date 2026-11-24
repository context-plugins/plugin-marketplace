from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusHightouchIdrApi(str, Enum):
    QUEUED = "QUEUED"
    PROCESSING = "PROCESSING"
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"
    CANCELLED = "CANCELLED"

    __str__ = str.__str__


StatusHightouchIdrApiOrStr: TypeAlias = Annotated[
    StatusHightouchIdrApi | str, open_enum_validator(StatusHightouchIdrApi)
]
