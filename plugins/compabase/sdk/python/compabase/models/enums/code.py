from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    """Machine-readable domain error code."""

    INVALID_KRS = "INVALID_KRS"
    INVALID_NIP = "INVALID_NIP"
    INVALID_CURSOR = "INVALID_CURSOR"
    INVALID_RANGE = "INVALID_RANGE"
    INVALID_PARAMETER = "INVALID_PARAMETER"
    CONFLICTING_PARAMETERS = "CONFLICTING_PARAMETERS"
    INVALID_BOOLEAN = "INVALID_BOOLEAN"
    INVALID_KEYWORDS = "INVALID_KEYWORDS"
    INVALID_API_KEY = "INVALID_API_KEY"
    UNAUTHORIZED = "UNAUTHORIZED"
    NOT_FOUND = "NOT_FOUND"
    QUOTA_EXCEEDED = "QUOTA_EXCEEDED"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
