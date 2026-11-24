from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ErrorCode(str, Enum):
    """Structured failure reason; null until/unless the run fails. Branch on this instead of parsing error."""

    BLOCKED = "blocked"
    TIMEOUT = "timeout"
    SELECTOR = "selector"
    HTTP_ERROR = "http_error"
    NETWORK = "network"
    STORAGE = "storage"
    UNKNOWN = "unknown"

    __str__ = str.__str__


ErrorCodeOrStr: TypeAlias = Annotated[ErrorCode | str, open_enum_validator(ErrorCode)]
