from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResponseStatus(str, Enum):
    """Status of the response."""

    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"

    __str__ = str.__str__


ResponseStatusOrStr: TypeAlias = Annotated[ResponseStatus | str, open_enum_validator(ResponseStatus)]
