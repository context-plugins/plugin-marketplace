from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict


class GoogleCloudApigeeV1AppGroup(SdkBaseModel):
    """AppGroup contains the request/response fields representing the logical grouping of apps. Note that appgroup_id,
    create_time and update_time cannot be changed by the user, and gets updated by the system. The name and the
    organization once provided cannot be edited subsequently."""

    status: Optional[str] = UNSET
    """Valid values are ``active`` or ``inactive``. Note that the status of the AppGroup should be updated via
    UpdateAppGroupRequest by setting the action as ``active`` or ``inactive``."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Created time as milliseconds since epoch."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """A list of attributes"""

    channel_id: Optional[str] = Field(default=UNSET, alias="channelId")
    """channel identifier identifies the owner maintaing this grouping."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """app group name displayed in the UI"""

    email: Optional[str] = UNSET
    """Optional. Email of the AppGroup."""

    organization: Optional[str] = UNSET
    """Immutable. the org the app group is created"""

    app_group_id: Optional[str] = Field(default=UNSET, alias="appGroupId")
    """Output only. Internal identifier that cannot be edited"""

    name: Optional[str] = UNSET
    r"""Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\-$ %."""

    channel_uri: Optional[str] = Field(default=UNSET, alias="channelUri")
    """A reference to the associated storefront/marketplace."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Modified time as milliseconds since epoch."""


class GoogleCloudApigeeV1AppGroupDict(TypedDict):
    status: NotRequired[str]
    created_at: NotRequired[str]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    channel_id: NotRequired[str]
    display_name: NotRequired[str]
    email: NotRequired[str]
    organization: NotRequired[str]
    app_group_id: NotRequired[str]
    name: NotRequired[str]
    channel_uri: NotRequired[str]
    last_modified_at: NotRequired[str]
