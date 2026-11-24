from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiMode1(str, Enum):
    """Specifies whether the API mode for the test execution is streaming or non-streaming."""

    STREAMING = "Streaming"
    NON_STREAMING = "NonStreaming"

    __str__ = str.__str__


ApiMode1OrStr: TypeAlias = Annotated[ApiMode1 | str, open_enum_validator(ApiMode1)]
