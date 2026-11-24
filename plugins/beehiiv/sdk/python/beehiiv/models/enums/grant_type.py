from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GrantType(str, Enum):
    """The OAuth2 grant type."""

    AUTHORIZATION_CODE = "authorization_code"
    REFRESH_TOKEN = "refresh_token"

    __str__ = str.__str__


GrantTypeOrStr: TypeAlias = Annotated[GrantType | str, open_enum_validator(GrantType)]
