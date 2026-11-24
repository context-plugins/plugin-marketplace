from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cognito_config import CognitoConfig, CognitoConfigDict
from .enums.auth_type import AuthTypeOrStr
from .lambda_authorizer_config import LambdaAuthorizerConfig, LambdaAuthorizerConfigDict
from .open_id_connect_config import OpenIdConnectConfig, OpenIdConnectConfigDict


class AuthProvider(SdkBaseModel):
    auth_type: AuthTypeOrStr = Field(alias="authType")
    """The authorization type."""

    cognito_config: Optional[CognitoConfig] = Field(default=UNSET, alias="cognitoConfig")
    open_id_connect_config: Optional[OpenIdConnectConfig] = Field(default=UNSET, alias="openIDConnectConfig")
    lambda_authorizer_config: Optional[LambdaAuthorizerConfig] = Field(default=UNSET, alias="lambdaAuthorizerConfig")


class AuthProviderDict(TypedDict):
    auth_type: AuthTypeOrStr
    cognito_config: NotRequired[CognitoConfigDict]
    open_id_connect_config: NotRequired[OpenIdConnectConfigDict]
    lambda_authorizer_config: NotRequired[LambdaAuthorizerConfigDict]
