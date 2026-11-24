from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cognito_user_pool_config import CognitoUserPoolConfig, CognitoUserPoolConfigDict
from .enums.authentication_type import AuthenticationTypeOrStr
from .lambda_authorizer_config import LambdaAuthorizerConfig, LambdaAuthorizerConfigDict
from .open_id_connect_config import OpenIdConnectConfig, OpenIdConnectConfigDict


class AdditionalAuthenticationProvider(SdkBaseModel):
    authentication_type: Optional[AuthenticationTypeOrStr] = Field(default=UNSET, alias="authenticationType")
    """The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito
    user pools, or Lambda."""

    open_id_connect_config: Optional[OpenIdConnectConfig] = Field(default=UNSET, alias="openIDConnectConfig")
    user_pool_config: Optional[CognitoUserPoolConfig] = Field(default=UNSET, alias="userPoolConfig")
    lambda_authorizer_config: Optional[LambdaAuthorizerConfig] = Field(default=UNSET, alias="lambdaAuthorizerConfig")


class AdditionalAuthenticationProviderDict(TypedDict):
    authentication_type: NotRequired[AuthenticationTypeOrStr]
    open_id_connect_config: NotRequired[OpenIdConnectConfigDict]
    user_pool_config: NotRequired[CognitoUserPoolConfigDict]
    lambda_authorizer_config: NotRequired[LambdaAuthorizerConfigDict]
