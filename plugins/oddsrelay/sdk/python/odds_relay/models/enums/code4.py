from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code4(str, Enum):
    """Stable machine code; branch on this, never on ``message``."""

    MISSING_API_KEY = "missing_api_key"
    INVALID_API_KEY = "invalid_api_key"
    REVOKED_API_KEY = "revoked_api_key"
    EXPIRED_API_KEY = "expired_api_key"
    PAUSED_API_KEY = "paused_api_key"

    __str__ = str.__str__


Code4OrStr: TypeAlias = Annotated[Code4 | str, open_enum_validator(Code4)]
