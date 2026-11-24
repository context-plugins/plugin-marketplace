from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Error1(str, Enum):
    """Stable machine-readable code. Switch on this, not on the message."""

    VALIDATION_ERROR = "validation_error"
    INVALID_API_KEY = "invalid_api_key"
    SCOPE_NOT_ALLOWED = "scope_not_allowed"
    TIER_NOT_ALLOWED = "tier_not_allowed"
    NOT_FOUND = "not_found"
    QUOTA_EXCEEDED = "quota_exceeded"
    PUBLIC_RECORD_ALLOWANCE_EXCEEDED = "public_record_allowance_exceeded"
    NOT_IMPLEMENTED = "not_implemented"
    SEARCH_TIMEOUT = "search_timeout"
    INTERNAL_ERROR = "internal_error"
    SERVICE_UNAVAILABLE = "service_unavailable"

    __str__ = str.__str__


Error1OrStr: TypeAlias = Annotated[Error1 | str, open_enum_validator(Error1)]
