from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Result(str, Enum):
    """The result value will be OK when no syntax errors are found, or FAIL if the workflow definition does not pass
    verification."""

    OK = "OK"
    FAIL = "FAIL"

    __str__ = str.__str__


ResultOrStr: TypeAlias = Annotated[Result | str, open_enum_validator(Result)]
