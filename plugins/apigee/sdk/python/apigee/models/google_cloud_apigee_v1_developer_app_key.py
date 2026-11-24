from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict


class GoogleCloudApigeeV1DeveloperAppKey(SdkBaseModel):
    expires_in_seconds: Optional[str] = Field(default=UNSET, alias="expiresInSeconds")
    """Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of ``-1``,
    the API key never expires. The expiration time can't be updated after it is set."""

    status: Optional[str] = UNSET
    """Status of the credential. Valid values include ``approved`` or ``revoked``."""

    consumer_key: Optional[str] = Field(default=UNSET, alias="consumerKey")
    """Consumer key."""

    issued_at: Optional[str] = Field(default=UNSET, alias="issuedAt")
    """Time the developer app was created in milliseconds since epoch."""

    scopes: Optional[list[str]] = UNSET
    """Scopes to apply to the app. The specified scope names must already be defined for the API product that you
    associate with the app."""

    api_products: Optional[list[Any]] = Field(default=UNSET, alias="apiProducts")
    """List of API products for which the credential can be used. **Note**: Do not specify the list of API products when
    creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the
    association after the consumer key and secret are created."""

    expires_at: Optional[str] = Field(default=UNSET, alias="expiresAt")
    """Time the developer app expires in milliseconds since epoch."""

    consumer_secret: Optional[str] = Field(default=UNSET, alias="consumerSecret")
    """Secret key."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """List of attributes associated with the credential."""


class GoogleCloudApigeeV1DeveloperAppKeyDict(TypedDict):
    expires_in_seconds: NotRequired[str]
    status: NotRequired[str]
    consumer_key: NotRequired[str]
    issued_at: NotRequired[str]
    scopes: NotRequired[list[str]]
    api_products: NotRequired[list[Any]]
    expires_at: NotRequired[str]
    consumer_secret: NotRequired[str]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
