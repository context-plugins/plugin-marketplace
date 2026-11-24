from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oauth_refresh_token_credentials2 import OauthRefreshTokenCredentials2, OauthRefreshTokenCredentials2Dict


class WorkdayProfile(SdkBaseModel):
    """Profile for connecting to a Workday source."""

    tenant: Optional[str] = UNSET
    """Required. Tenant for the Workday connection (e.g., ``google12``)."""

    oauth_refresh_token_credentials: Optional[OauthRefreshTokenCredentials2] = Field(
        default=UNSET, alias="oauthRefreshTokenCredentials"
    )
    """Required. Credentials for authenticating with the Workday API. OAuth Refresh Token credentials for authenticating
    with the Workday API."""

    host: Optional[str] = UNSET
    """Required. Host for the Workday connection. Must be a valid hostname (e.g.,
    ``wd3-impl-services1.workday.com``)."""


class WorkdayProfileDict(TypedDict):
    tenant: NotRequired[str]
    oauth_refresh_token_credentials: NotRequired[OauthRefreshTokenCredentials2Dict]
    host: NotRequired[str]
