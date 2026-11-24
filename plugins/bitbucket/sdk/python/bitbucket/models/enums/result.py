from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Result(str, Enum):
    """The state of the report. May be set to PENDING and later updated."""

    PASSED = "PASSED"
    FAILED = "FAILED"
    PENDING = "PENDING"

    __str__ = str.__str__


ResultOrStr: TypeAlias = Annotated[Result | str, open_enum_validator(Result)]
