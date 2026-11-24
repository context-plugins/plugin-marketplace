from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GrantType1(str, Enum):
    """authorization_code or refresh_token."""

    AUTHORIZATION_CODE = "authorization_code"
    REFRESH_TOKEN = "refresh_token"

    __str__ = str.__str__


GrantType1OrStr: TypeAlias = Annotated[GrantType1 | str, open_enum_validator(GrantType1)]
