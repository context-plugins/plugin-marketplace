from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TokenTypeHint1(str, Enum):
    """Optional hint to help the server process the token faster."""

    ACCESS_TOKEN = "access_token"
    REFRESH_TOKEN = "refresh_token"

    __str__ = str.__str__


TokenTypeHint1OrStr: TypeAlias = Annotated[TokenTypeHint1 | str, open_enum_validator(TokenTypeHint1)]
