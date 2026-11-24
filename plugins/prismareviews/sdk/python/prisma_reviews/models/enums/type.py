from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Family of the error, from the HTTP status."""

    AUTHENTICATION_ERROR = "authentication_error"
    PERMISSION_ERROR = "permission_error"
    NOT_FOUND_ERROR = "not_found_error"
    CONFLICT_ERROR = "conflict_error"
    INVALID_REQUEST_ERROR = "invalid_request_error"
    RATE_LIMIT_ERROR = "rate_limit_error"
    API_ERROR = "api_error"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
