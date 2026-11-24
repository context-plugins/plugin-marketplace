from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuthenticationType3(str, Enum):
    """The new authentication type for the GraphqlApi object."""

    API_KEY = "API_KEY"
    AWS_IAM = "AWS_IAM"
    AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS"
    OPENID_CONNECT = "OPENID_CONNECT"
    AWS_LAMBDA = "AWS_LAMBDA"

    __str__ = str.__str__


AuthenticationType3OrStr: TypeAlias = Annotated[AuthenticationType3 | str, open_enum_validator(AuthenticationType3)]
