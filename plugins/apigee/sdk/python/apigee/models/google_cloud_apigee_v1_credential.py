from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_product_ref import (
    GoogleCloudApigeeV1ApiProductRef,
    GoogleCloudApigeeV1ApiProductRefDict,
)
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict


class GoogleCloudApigeeV1Credential(SdkBaseModel):
    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """List of attributes associated with this credential."""

    expires_at: Optional[str] = Field(default=UNSET, alias="expiresAt")
    """Time the credential will expire in milliseconds since epoch."""

    api_products: Optional[list[GoogleCloudApigeeV1ApiProductRef]] = Field(default=UNSET, alias="apiProducts")
    """List of API products this credential can be used for."""

    consumer_secret: Optional[str] = Field(default=UNSET, alias="consumerSecret")
    """Secret key."""

    issued_at: Optional[str] = Field(default=UNSET, alias="issuedAt")
    """Time the credential was issued in milliseconds since epoch."""

    scopes: Optional[list[str]] = UNSET
    """List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate
    with the app."""

    status: Optional[str] = UNSET
    """Status of the credential. Valid values include ``approved`` or ``revoked``."""

    consumer_key: Optional[str] = Field(default=UNSET, alias="consumerKey")
    """Consumer key."""


class GoogleCloudApigeeV1CredentialDict(TypedDict):
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    expires_at: NotRequired[str]
    api_products: NotRequired[list[GoogleCloudApigeeV1ApiProductRefDict]]
    consumer_secret: NotRequired[str]
    issued_at: NotRequired[str]
    scopes: NotRequired[list[str]]
    status: NotRequired[str]
    consumer_key: NotRequired[str]
