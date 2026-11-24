from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oauth_client_credentials2 import OauthClientCredentials2, OauthClientCredentials2Dict


class SalesforceMarketingCloudProfile(SdkBaseModel):
    """Profile for connecting to a Salesforce Marketing Cloud source."""

    oauth_client_credentials: Optional[OauthClientCredentials2] = Field(default=UNSET, alias="oauthClientCredentials")
    """Required. Input only. Credentials for authenticating with the Salesforce Marketing Cloud API."""

    subdomain: Optional[str] = UNSET
    """Required. Subdomain for the Salesforce Marketing Cloud connection. Example: if your specific endpoint is
    ``https://{your-specific-subdomain}.rest.marketingcloudapis.com/``, the subdomain is ``{your-specific-subdomain}``.
    Must be 1-63 characters, start and end with an alphanumeric character, and contain only lowercase letters, numbers,
    and hyphens (-)."""


class SalesforceMarketingCloudProfileDict(TypedDict):
    oauth_client_credentials: NotRequired[OauthClientCredentials2Dict]
    subdomain: NotRequired[str]
