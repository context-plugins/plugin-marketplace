from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Authentication1(str, Enum):
    """Configured receiver-authentication mode. The credential is never returned."""

    NONE = "none"
    BEARER = "bearer"
    X_API_KEY = "x-api-key"

    __str__ = str.__str__


Authentication1OrStr: TypeAlias = Annotated[Authentication1 | str, open_enum_validator(Authentication1)]
