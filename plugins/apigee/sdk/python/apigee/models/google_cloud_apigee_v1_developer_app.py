from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict
from .google_cloud_apigee_v1_credential import GoogleCloudApigeeV1Credential, GoogleCloudApigeeV1CredentialDict


class GoogleCloudApigeeV1DeveloperApp(SdkBaseModel):
    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Time the developer app was modified in milliseconds since epoch."""

    scopes: Optional[list[str]] = UNSET
    """Scopes to apply to the developer app. The specified scopes must already exist for the API product that you
    associate with the developer app."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Time the developer app was created in milliseconds since epoch."""

    key_expires_in: Optional[str] = Field(default=UNSET, alias="keyExpiresIn")
    """Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or
    left to the default value of ``-1``, the API key never expires. The expiration time can't be updated after it is
    set."""

    app_id: Optional[str] = Field(default=UNSET, alias="appId")
    """ID of the developer app. This ID is not user specified but is automatically generated on app creation. appId is a
    UUID."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """List of attributes for the developer app."""

    app_family: Optional[str] = Field(default=UNSET, alias="appFamily")
    """Developer app family."""

    callback_url: Optional[str] = Field(default=UNSET, alias="callbackUrl")
    """Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer
    apps."""

    credentials: Optional[list[GoogleCloudApigeeV1Credential]] = UNSET
    """Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with
    the API products."""

    developer_id: Optional[str] = Field(default=UNSET, alias="developerId")
    """ID of the developer."""

    name: Optional[str] = UNSET
    """Name of the developer app."""

    api_products: Optional[list[str]] = Field(default=UNSET, alias="apiProducts")
    """List of API products associated with the developer app."""

    status: Optional[str] = UNSET
    """Status of the credential. Valid values include ``approved`` or ``revoked``."""


class GoogleCloudApigeeV1DeveloperAppDict(TypedDict):
    last_modified_at: NotRequired[str]
    scopes: NotRequired[list[str]]
    created_at: NotRequired[str]
    key_expires_in: NotRequired[str]
    app_id: NotRequired[str]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    app_family: NotRequired[str]
    callback_url: NotRequired[str]
    credentials: NotRequired[list[GoogleCloudApigeeV1CredentialDict]]
    developer_id: NotRequired[str]
    name: NotRequired[str]
    api_products: NotRequired[list[str]]
    status: NotRequired[str]
