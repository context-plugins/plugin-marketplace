from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuthenticationType(str, Enum):
    """The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito
    user pools, or Lambda."""

    API_KEY = "API_KEY"
    AWS_IAM = "AWS_IAM"
    AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS"
    OPENID_CONNECT = "OPENID_CONNECT"
    AWS_LAMBDA = "AWS_LAMBDA"

    __str__ = str.__str__


AuthenticationTypeOrStr: TypeAlias = Annotated[AuthenticationType | str, open_enum_validator(AuthenticationType)]
