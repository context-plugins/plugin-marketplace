from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UserWorkloadAuthenticationType(str, Enum):
    """Optional. Authentication type for the user workload running in containers."""

    AUTHENTICATION_TYPE_UNSPECIFIED = "AUTHENTICATION_TYPE_UNSPECIFIED"
    SERVICE_ACCOUNT = "SERVICE_ACCOUNT"
    END_USER_CREDENTIALS = "END_USER_CREDENTIALS"

    __str__ = str.__str__


UserWorkloadAuthenticationTypeOrStr: TypeAlias = Annotated[
    UserWorkloadAuthenticationType | str, open_enum_validator(UserWorkloadAuthenticationType)
]
