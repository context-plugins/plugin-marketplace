from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TokenType(str, Enum):
    """The type of token issued."""

    BEARER = "Bearer"

    __str__ = str.__str__


TokenTypeOrStr: TypeAlias = Annotated[TokenType | str, open_enum_validator(TokenType)]
