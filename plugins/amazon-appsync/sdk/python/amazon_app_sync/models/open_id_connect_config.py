from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OpenIdConnectConfig(SdkBaseModel):
    issuer: str
    """The issuer for the OIDC configuration. The issuer returned by discovery must exactly match the value of iss in
    the ID token."""

    client_id: Optional[str] = Field(default=UNSET, alias="clientId")
    """The client identifier of the relying party at the OpenID identity provider. This identifier is typically obtained
    when the relying party is registered with the OpenID identity provider. You can specify a regular expression so that
    AppSync can validate against multiple client identifiers at a time."""

    iat_ttl: Optional[int] = Field(default=UNSET, alias="iatTTL")
    """The number of milliseconds that a token is valid after it's issued to a user."""

    auth_ttl: Optional[int] = Field(default=UNSET, alias="authTTL")
    """The number of milliseconds that a token is valid after being authenticated."""


class OpenIdConnectConfigDict(TypedDict):
    issuer: str
    client_id: NotRequired[str]
    iat_ttl: NotRequired[int]
    auth_ttl: NotRequired[int]
