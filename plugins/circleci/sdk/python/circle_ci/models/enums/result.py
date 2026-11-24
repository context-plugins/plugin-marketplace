from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Result(str, Enum):
    """The test result"""

    SUCCESS = "success"
    FAILURE = "failure"
    SKIPPED = "skipped"

    __str__ = str.__str__


ResultOrStr: TypeAlias = Annotated[Result | str, open_enum_validator(Result)]
