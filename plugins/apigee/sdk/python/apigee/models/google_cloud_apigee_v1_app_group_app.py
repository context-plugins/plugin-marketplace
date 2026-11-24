from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict
from .google_cloud_apigee_v1_credential import GoogleCloudApigeeV1Credential, GoogleCloudApigeeV1CredentialDict


class GoogleCloudApigeeV1AppGroupApp(SdkBaseModel):
    """Response for [GetAppGroupApp].[AppGroupApps.GetAppGroupApp],
    [CreateAppGroupAppRequest].[AppGroupApp.CreateAppGroupAppRequest] and
    [DeleteAppGroupApp].[AppGroupApp.DeleteAppGroupApp]"""

    status: Optional[str] = UNSET
    """Status of the App. Valid values include ``approved`` or ``revoked``."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """List of attributes for the AppGroup app."""

    name: Optional[str] = UNSET
    """Immutable. Name of the AppGroup app whose resource name format is of syntax
    (organizations/*/appgroups/*/apps/*)."""

    key_expires_in: Optional[str] = Field(default=UNSET, alias="keyExpiresIn")
    """Immutable. Expiration time, in seconds, for the consumer key that is generated for the AppGroup app. If not set
    or left to the default value of ``-1``, the API key never expires. The expiration time can't be updated after it is
    set."""

    credentials: Optional[list[GoogleCloudApigeeV1Credential]] = UNSET
    """Output only. Set of credentials for the AppGroup app consisting of the consumer key/secret pairs associated with
    the API products."""

    api_products: Optional[list[str]] = Field(default=UNSET, alias="apiProducts")
    """List of API products associated with the AppGroup app."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Time the AppGroup app was created in milliseconds since epoch."""

    scopes: Optional[list[str]] = UNSET
    """Scopes to apply to the AppGroup app. The specified scopes must already exist for the API product that you
    associate with the AppGroup app."""

    callback_url: Optional[str] = Field(default=UNSET, alias="callbackUrl")
    """Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to AppGroup apps."""

    app_group: Optional[str] = Field(default=UNSET, alias="appGroup")
    """Immutable. Name of the parent AppGroup whose resource name format is of syntax (organizations/*/appgroups/*)."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Time the AppGroup app was modified in milliseconds since epoch."""

    app_id: Optional[str] = Field(default=UNSET, alias="appId")
    """Immutable. ID of the AppGroup app."""


class GoogleCloudApigeeV1AppGroupAppDict(TypedDict):
    status: NotRequired[str]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    name: NotRequired[str]
    key_expires_in: NotRequired[str]
    credentials: NotRequired[list[GoogleCloudApigeeV1CredentialDict]]
    api_products: NotRequired[list[str]]
    created_at: NotRequired[str]
    scopes: NotRequired[list[str]]
    callback_url: NotRequired[str]
    app_group: NotRequired[str]
    last_modified_at: NotRequired[str]
    app_id: NotRequired[str]
