from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RetryType(str, Enum):
    """Specifies the type of retry to perform."""

    RETRY_ALL_BUILDS = "RETRY_ALL_BUILDS"
    RETRY_FAILED_BUILDS = "RETRY_FAILED_BUILDS"

    __str__ = str.__str__


RetryTypeOrStr: TypeAlias = Annotated[RetryType | str, open_enum_validator(RetryType)]
