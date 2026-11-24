from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Result1(str, Enum):
    """The state of the report. May be set to PENDING and later updated."""

    PASSED = "PASSED"
    FAILED = "FAILED"
    SKIPPED = "SKIPPED"
    IGNORED = "IGNORED"

    __str__ = str.__str__


Result1OrStr: TypeAlias = Annotated[Result1 | str, open_enum_validator(Result1)]
