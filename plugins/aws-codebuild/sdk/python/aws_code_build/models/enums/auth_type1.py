from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuthType1(str, Enum):
    """The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, PERSONAL_ACCESS_TOKEN,
    CODECONNECTIONS, or SECRETS_MANAGER."""

    OAUTH = "OAUTH"
    BASIC_AUTH = "BASIC_AUTH"
    PERSONAL_ACCESS_TOKEN = "PERSONAL_ACCESS_TOKEN"
    CODECONNECTIONS = "CODECONNECTIONS"
    SECRETS_MANAGER = "SECRETS_MANAGER"

    __str__ = str.__str__


AuthType1OrStr: TypeAlias = Annotated[AuthType1 | str, open_enum_validator(AuthType1)]
