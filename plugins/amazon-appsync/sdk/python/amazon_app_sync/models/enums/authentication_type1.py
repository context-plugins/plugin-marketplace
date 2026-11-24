from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuthenticationType1(str, Enum):
    """The authentication type."""

    API_KEY = "API_KEY"
    AWS_IAM = "AWS_IAM"
    AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS"
    OPENID_CONNECT = "OPENID_CONNECT"
    AWS_LAMBDA = "AWS_LAMBDA"

    __str__ = str.__str__


AuthenticationType1OrStr: TypeAlias = Annotated[AuthenticationType1 | str, open_enum_validator(AuthenticationType1)]
