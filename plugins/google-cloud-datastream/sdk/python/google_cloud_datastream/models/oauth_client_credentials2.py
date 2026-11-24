from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .secret1 import Secret1, Secret1Dict


class OauthClientCredentials2(SdkBaseModel):
    """Required. Input only. Credentials for authenticating with the Salesforce Marketing Cloud API."""

    client_secret: Optional[Secret1] = Field(default=UNSET, alias="clientSecret")
    """Required. Client secret for OAuth Client Credentials."""

    client_id: Optional[str] = Field(default=UNSET, alias="clientId")
    """Required. Client ID for OAuth Client Credentials."""


class OauthClientCredentials2Dict(TypedDict):
    client_secret: NotRequired[Secret1Dict]
    client_id: NotRequired[str]
