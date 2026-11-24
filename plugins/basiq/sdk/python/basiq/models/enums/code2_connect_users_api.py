from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code2ConnectUsersApi(str, Enum):
    """Application-specific error code, expressed as a string value."""

    FORBIDDEN_ACCESS = "forbidden-access"
    NO_PRODUCTION_ACCESS = "no-production-access"
    ACCESS_DENIED = "access-denied"

    __str__ = str.__str__


Code2ConnectUsersApiOrStr: TypeAlias = Annotated[Code2ConnectUsersApi | str, open_enum_validator(Code2ConnectUsersApi)]
