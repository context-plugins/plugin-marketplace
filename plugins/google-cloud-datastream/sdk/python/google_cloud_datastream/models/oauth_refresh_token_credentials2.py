from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oauth_client_credentials1 import OauthClientCredentials1, OauthClientCredentials1Dict
from .secret3 import Secret3, Secret3Dict


class OauthRefreshTokenCredentials2(SdkBaseModel):
    """Required. Credentials for authenticating with the Workday API. OAuth Refresh Token credentials for authenticating
    with the Workday API."""

    oauth_client_credentials: Optional[OauthClientCredentials1] = Field(default=UNSET, alias="oauthClientCredentials")
    """Required. Specifies the OAuth Client Credentials."""

    refresh_token: Optional[Secret3] = Field(default=UNSET, alias="refreshToken")
    """Required. Specifies the OAuth Refresh Token."""


class OauthRefreshTokenCredentials2Dict(TypedDict):
    oauth_client_credentials: NotRequired[OauthClientCredentials1Dict]
    refresh_token: NotRequired[Secret3Dict]
