from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TokenTypeHint(str, Enum):
    """A hint about the type of token being sent."""

    ACCESS_TOKEN = "access_token"
    REFRESH_TOKEN = "refresh_token"

    __str__ = str.__str__


TokenTypeHintOrStr: TypeAlias = Annotated[TokenTypeHint | str, open_enum_validator(TokenTypeHint)]
