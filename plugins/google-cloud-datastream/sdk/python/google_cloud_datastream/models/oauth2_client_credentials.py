from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Oauth2ClientCredentials(SdkBaseModel):
    """OAuth2 Client Credentials."""

    secret_manager_stored_client_secret: Optional[str] = Field(default=UNSET, alias="secretManagerStoredClientSecret")
    """Optional. A reference to a Secret Manager resource name storing the Salesforce OAuth2 client_secret. Mutually
    exclusive with the ``client_secret`` field."""

    client_secret: Optional[str] = Field(default=UNSET, alias="clientSecret")
    """Optional. Client secret for Salesforce OAuth2 Client Credentials. Mutually exclusive with the
    ``secret_manager_stored_client_secret`` field."""

    client_id: Optional[str] = Field(default=UNSET, alias="clientId")
    """Required. Client ID for Salesforce OAuth2 Client Credentials."""


class Oauth2ClientCredentialsDict(TypedDict):
    secret_manager_stored_client_secret: NotRequired[str]
    client_secret: NotRequired[str]
    client_id: NotRequired[str]
