from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code1PlatformPayeesApi(str, Enum):
    """Application-specific error code."""

    UNAUTHORIZED = "unauthorized"
    INVALID_TOKEN = "invalid-token"

    __str__ = str.__str__


Code1PlatformPayeesApiOrStr: TypeAlias = Annotated[
    Code1PlatformPayeesApi | str, open_enum_validator(Code1PlatformPayeesApi)
]
