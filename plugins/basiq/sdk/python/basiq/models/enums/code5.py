from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code5(str, Enum):
    """Application-specific error code, expressed as a string value."""

    UNAUTHORIZED_ACCESS = "unauthorized-access"
    INVALID_AUTHORIZATION_TOKEN = "invalid-authorization-token"

    __str__ = str.__str__


Code5OrStr: TypeAlias = Annotated[Code5 | str, open_enum_validator(Code5)]
