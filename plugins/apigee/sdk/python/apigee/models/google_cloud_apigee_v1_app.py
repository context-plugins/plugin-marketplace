from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_product_ref import (
    GoogleCloudApigeeV1ApiProductRef,
    GoogleCloudApigeeV1ApiProductRefDict,
)
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict
from .google_cloud_apigee_v1_credential import GoogleCloudApigeeV1Credential, GoogleCloudApigeeV1CredentialDict


class GoogleCloudApigeeV1App(SdkBaseModel):
    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """List of attributes."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Unix time when the app was created."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Last modified time as milliseconds since epoch."""

    status: Optional[str] = UNSET
    """Status of the credential."""

    app_id: Optional[str] = Field(default=UNSET, alias="appId")
    """ID of the app."""

    key_expires_in: Optional[str] = Field(default=UNSET, alias="keyExpiresIn")
    """Duration, in milliseconds, of the consumer key that will be generated for the app. The default value, -1,
    indicates an infinite validity period. Once set, the expiration can't be updated. json key: keyExpiresIn"""

    name: Optional[str] = UNSET
    """Name of the app."""

    api_products: Optional[list[GoogleCloudApigeeV1ApiProductRef]] = Field(default=UNSET, alias="apiProducts")
    """List of API products associated with the app."""

    credentials: Optional[list[GoogleCloudApigeeV1Credential]] = UNSET
    """Output only. Set of credentials for the app. Credentials are API key/secret pairs associated with API
    products."""

    developer_id: Optional[str] = Field(default=UNSET, alias="developerId")
    """ID of the developer."""

    scopes: Optional[list[str]] = UNSET
    """Scopes to apply to the app. The specified scope names must already exist on the API product that you associate
    with the app."""

    app_group: Optional[str] = Field(default=UNSET, alias="appGroup")
    """Name of the AppGroup"""

    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    """Name of the company that owns the app."""

    developer_email: Optional[str] = Field(default=UNSET, alias="developerEmail")
    """Email of the developer."""

    callback_url: Optional[str] = Field(default=UNSET, alias="callbackUrl")
    """Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to apps."""


class GoogleCloudApigeeV1AppDict(TypedDict):
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    created_at: NotRequired[str]
    last_modified_at: NotRequired[str]
    status: NotRequired[str]
    app_id: NotRequired[str]
    key_expires_in: NotRequired[str]
    name: NotRequired[str]
    api_products: NotRequired[list[GoogleCloudApigeeV1ApiProductRefDict]]
    credentials: NotRequired[list[GoogleCloudApigeeV1CredentialDict]]
    developer_id: NotRequired[str]
    scopes: NotRequired[list[str]]
    app_group: NotRequired[str]
    company_name: NotRequired[str]
    developer_email: NotRequired[str]
    callback_url: NotRequired[str]
