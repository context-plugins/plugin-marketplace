from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict


class GoogleCloudApigeeV1Developer(SdkBaseModel):
    user_name: Optional[str] = Field(default=UNSET, alias="userName")
    """Required. User name of the developer. Not used by Apigee hybrid."""

    email: Optional[str] = UNSET
    """Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid.
    Note that the email address has to be in lowercase only."""

    access_type: Optional[str] = Field(default=UNSET, alias="accessType")
    """Access type."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Time at which the developer was last modified in milliseconds since epoch."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Time at which the developer was created in milliseconds since epoch."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """Required. First name of the developer."""

    organization_name: Optional[str] = Field(default=UNSET, alias="organizationName")
    """Output only. Name of the Apigee organization in which the developer resides."""

    developer_id: Optional[str] = Field(default=UNSET, alias="developerId")
    """ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same
    over time."""

    companies: Optional[list[str]] = UNSET
    """List of companies associated with the developer."""

    app_family: Optional[str] = Field(default=UNSET, alias="appFamily")
    """Developer app family."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """Optional. Developer attributes (name/value pairs). The custom attribute limit is 18."""

    status: Optional[str] = UNSET
    """Output only. Status of the developer. Valid values are ``active`` and ``inactive``."""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """Required. Last name of the developer."""

    apps: Optional[list[str]] = UNSET
    """List of apps associated with the developer."""


class GoogleCloudApigeeV1DeveloperDict(TypedDict):
    user_name: NotRequired[str]
    email: NotRequired[str]
    access_type: NotRequired[str]
    last_modified_at: NotRequired[str]
    created_at: NotRequired[str]
    first_name: NotRequired[str]
    organization_name: NotRequired[str]
    developer_id: NotRequired[str]
    companies: NotRequired[list[str]]
    app_family: NotRequired[str]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    status: NotRequired[str]
    last_name: NotRequired[str]
    apps: NotRequired[list[str]]
