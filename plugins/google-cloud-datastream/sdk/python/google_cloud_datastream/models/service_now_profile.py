from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oauth_client_credentials5 import OauthClientCredentials5, OauthClientCredentials5Dict
from .user_password_credentials2 import UserPasswordCredentials2, UserPasswordCredentials2Dict


class ServiceNowProfile(SdkBaseModel):
    """Profile for connecting to a ServiceNow source."""

    user_password_credentials: Optional[UserPasswordCredentials2] = Field(
        default=UNSET, alias="userPasswordCredentials"
    )
    """User-password authentication."""

    instance: Optional[str] = UNSET
    """Required. The instance of the ServiceNow account. This is the `` part of the URL ``https://.service-now.com``."""

    oauth_client_credentials: Optional[OauthClientCredentials5] = Field(default=UNSET, alias="oauthClientCredentials")
    """Credentials for authenticating with the ServiceNow API."""


class ServiceNowProfileDict(TypedDict):
    user_password_credentials: NotRequired[UserPasswordCredentials2Dict]
    instance: NotRequired[str]
    oauth_client_credentials: NotRequired[OauthClientCredentials5Dict]
