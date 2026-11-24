from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBundleSocialPostCsvApi(str, Enum):
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    COMPLETED = "COMPLETED"
    COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS"
    FAILED = "FAILED"
    RATE_LIMITED = "RATE_LIMITED"

    __str__ = str.__str__


StatusBundleSocialPostCsvApiOrStr: TypeAlias = Annotated[
    StatusBundleSocialPostCsvApi | str, open_enum_validator(StatusBundleSocialPostCsvApi)
]
