from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_product_association import (
    GoogleCloudApigeeV1ApiProductAssociation,
    GoogleCloudApigeeV1ApiProductAssociationDict,
)
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict


class GoogleCloudApigeeV1AppGroupAppKey2(SdkBaseModel):
    """Note that only Scopes and Attributes of the AppGroupAppKey can be amended. Scopes and Attributes mentioned in the
    request will be inserted and the existing scopes and attributes will be removed."""

    expires_in_seconds: Optional[str] = Field(default=UNSET, alias="expiresInSeconds")
    """Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of ``-1``,
    the API key never expires. The expiration time can't be updated after it is set."""

    issued_at: Optional[str] = Field(default=UNSET, alias="issuedAt")
    """Output only. Time the AppGroup app was created in milliseconds since epoch."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """List of attributes associated with the credential."""

    status: Optional[str] = UNSET
    """Status of the credential. Valid values include ``approved`` or ``revoked``."""

    consumer_secret: Optional[str] = Field(default=UNSET, alias="consumerSecret")
    """Secret key."""

    api_products: Optional[list[GoogleCloudApigeeV1ApiProductAssociation]] = Field(default=UNSET, alias="apiProducts")
    """Output only. List of API products and its status for which the credential can be used. **Note**: Use
    UpdateAppGroupAppKeyApiProductRequest API to make the association after the consumer key and secret are created."""

    consumer_key: Optional[str] = Field(default=UNSET, alias="consumerKey")
    """Immutable. Consumer key."""

    scopes: Optional[list[str]] = UNSET
    """Scopes to apply to the app. The specified scope names must already be defined for the API product that you
    associate with the app."""

    expires_at: Optional[str] = Field(default=UNSET, alias="expiresAt")
    """Output only. Time the AppGroup app expires in milliseconds since epoch."""


class GoogleCloudApigeeV1AppGroupAppKey2Dict(TypedDict):
    expires_in_seconds: NotRequired[str]
    issued_at: NotRequired[str]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    status: NotRequired[str]
    consumer_secret: NotRequired[str]
    api_products: NotRequired[list[GoogleCloudApigeeV1ApiProductAssociationDict]]
    consumer_key: NotRequired[str]
    scopes: NotRequired[list[str]]
    expires_at: NotRequired[str]
