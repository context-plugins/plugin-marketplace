from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LastExecutionErrorCode(str, Enum):
    """Output only. The error code of the last execution of the curation. The error code is populated only when the last
    execution state is failed."""

    ERROR_CODE_UNSPECIFIED = "ERROR_CODE_UNSPECIFIED"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    UNAUTHORIZED = "UNAUTHORIZED"

    __str__ = str.__str__


LastExecutionErrorCodeOrStr: TypeAlias = Annotated[
    LastExecutionErrorCode | str, open_enum_validator(LastExecutionErrorCode)
]
