from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code1PlatformAuthLinksApi(str, Enum):
    """Application-specific error code, expressed as a string value."""

    UNAUTHORIZED_ACCESS = "unauthorized-access"
    INVALID_AUTHORIZATION_TOKEN = "invalid-authorization-token"

    __str__ = str.__str__


Code1PlatformAuthLinksApiOrStr: TypeAlias = Annotated[
    Code1PlatformAuthLinksApi | str, open_enum_validator(Code1PlatformAuthLinksApi)
]
