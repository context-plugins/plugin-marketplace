from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """Outcome of a single check."""

    PASS = "pass"
    FAIL = "fail"
    WARN = "warn"
    ERROR = "error"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
