from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ErrorCode(str, Enum):
    """Normalized lookup error code: 000 — OK, 113 — Internal service error, 121 — Invalid phone number length or
    format, 199 — Unexpected error. null when no result is available yet."""

    _000 = "000"
    _113 = "113"
    _121 = "121"
    _199 = "199"

    __str__ = str.__str__


ErrorCodeOrStr: TypeAlias = Annotated[ErrorCode | str, open_enum_validator(ErrorCode)]
