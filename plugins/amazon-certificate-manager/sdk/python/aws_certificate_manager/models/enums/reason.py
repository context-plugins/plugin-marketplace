from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """The reason for the failure."""

    ACCESS_DENIED = "ACCESS_DENIED"
    DOMAIN_MISMATCH = "DOMAIN_MISMATCH"
    DOMAIN_NOT_ALLOWED = "DOMAIN_NOT_ALLOWED"
    ENDPOINT_NOT_ACTIVE = "ENDPOINT_NOT_ACTIVE"
    HOSTED_ZONE_NOT_FOUND = "HOSTED_ZONE_NOT_FOUND"
    INTERNAL_FAILURE = "INTERNAL_FAILURE"
    INVALID_CHANGE_BATCH = "INVALID_CHANGE_BATCH"
    INVALID_PUBLIC_DOMAIN = "INVALID_PUBLIC_DOMAIN"
    TIMED_OUT = "TIMED_OUT"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
