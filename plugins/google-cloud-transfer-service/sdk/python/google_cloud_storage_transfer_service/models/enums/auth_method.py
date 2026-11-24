from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuthMethod(str, Enum):
    """Specifies the authentication and authorization method used by the storage service. When not specified, Transfer
    Service will attempt to determine right auth method to use."""

    AUTH_METHOD_UNSPECIFIED = "AUTH_METHOD_UNSPECIFIED"
    AUTH_METHOD_AWS_SIGNATURE_V4 = "AUTH_METHOD_AWS_SIGNATURE_V4"
    AUTH_METHOD_AWS_SIGNATURE_V2 = "AUTH_METHOD_AWS_SIGNATURE_V2"

    __str__ = str.__str__


AuthMethodOrStr: TypeAlias = Annotated[AuthMethod | str, open_enum_validator(AuthMethod)]
