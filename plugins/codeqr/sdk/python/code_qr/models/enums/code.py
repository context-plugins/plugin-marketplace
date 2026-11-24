from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    """The error code."""

    BAD_REQUEST = "bad_request"
    NOT_FOUND = "not_found"
    INTERNAL_SERVER_ERROR = "internal_server_error"
    UNAUTHORIZED = "unauthorized"
    FORBIDDEN = "forbidden"
    RATE_LIMIT_EXCEEDED = "rate_limit_exceeded"
    INVITE_EXPIRED = "invite_expired"
    INVITE_PENDING = "invite_pending"
    EXCEEDED_LIMIT = "exceeded_limit"
    CONFLICT = "conflict"
    UNPROCESSABLE_ENTITY = "unprocessable_entity"
    SERVICE_UNAVAILABLE = "service_unavailable"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
