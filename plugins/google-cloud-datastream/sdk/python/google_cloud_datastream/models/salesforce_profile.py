from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oauth2_client_credentials1 import Oauth2ClientCredentials1, Oauth2ClientCredentials1Dict
from .user_credentials2 import UserCredentials2, UserCredentials2Dict


class SalesforceProfile(SdkBaseModel):
    """Profile for connecting to a Salesforce source."""

    oauth2_client_credentials: Optional[Oauth2ClientCredentials1] = Field(
        default=UNSET, alias="oauth2ClientCredentials"
    )
    """Connected app authentication."""

    user_credentials: Optional[UserCredentials2] = Field(default=UNSET, alias="userCredentials")
    """Deprecated: Salesforce is retiring Username-Password authentication. Use ``oauth2_client_credentials``
    instead."""

    domain: Optional[str] = UNSET
    """Required. Domain endpoint for the Salesforce connection."""


class SalesforceProfileDict(TypedDict):
    oauth2_client_credentials: NotRequired[Oauth2ClientCredentials1Dict]
    user_credentials: NotRequired[UserCredentials2Dict]
    domain: NotRequired[str]
