from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """Status of the test."""

    TEST_STATUS_UNSPECIFIED = "TEST_STATUS_UNSPECIFIED"
    COMPLETE = "COMPLETE"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    PAGE_UNREACHABLE = "PAGE_UNREACHABLE"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
