from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SupportedAuthType(str, Enum):
    AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"
    NO_AUTH = "NO_AUTH"
    GOOGLE_SERVICE_ACCOUNT = "GOOGLE_SERVICE_ACCOUNT"
    USER_PASSWORD = "USER_PASSWORD"
    API_KEY = "API_KEY"
    OAUTH2_CLIENT_CREDENTIALS = "OAUTH2_CLIENT_CREDENTIALS"

    __str__ = str.__str__


SupportedAuthTypeOrStr: TypeAlias = Annotated[SupportedAuthType | str, open_enum_validator(SupportedAuthType)]
