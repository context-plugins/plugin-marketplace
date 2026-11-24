from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Result(str, Enum):
    """Output only. The result of the last execution of the plugin instance."""

    RESULT_UNSPECIFIED = "RESULT_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


ResultOrStr: TypeAlias = Annotated[Result | str, open_enum_validator(Result)]
