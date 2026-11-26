from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CredentialType(str, Enum):
    API_KEY = "api_key"
    OAUTH = "oauth"

    __str__ = str.__str__


CredentialTypeOrStr: TypeAlias = Annotated[CredentialType | str, open_enum_validator(CredentialType)]
