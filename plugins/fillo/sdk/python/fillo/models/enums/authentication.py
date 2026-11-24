from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Authentication(str, Enum):
    """Configured receiver-authentication mode."""

    NONE = "none"
    BEARER = "bearer"
    X_API_KEY = "x-api-key"

    __str__ = str.__str__


AuthenticationOrStr: TypeAlias = Annotated[Authentication | str, open_enum_validator(Authentication)]
