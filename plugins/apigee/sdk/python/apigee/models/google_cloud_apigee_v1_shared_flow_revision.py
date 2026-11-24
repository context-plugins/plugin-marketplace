from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_config_version2 import (
    GoogleCloudApigeeV1ConfigVersion2,
    GoogleCloudApigeeV1ConfigVersion2Dict,
)
from .google_cloud_apigee_v1_resource_files2 import (
    GoogleCloudApigeeV1ResourceFiles2,
    GoogleCloudApigeeV1ResourceFiles2Dict,
)


class GoogleCloudApigeeV1SharedFlowRevision(SdkBaseModel):
    """The metadata describing a shared flow revision."""

    resource_files: Optional[GoogleCloudApigeeV1ResourceFiles2] = Field(default=UNSET, alias="resourceFiles")
    """The resource files included in this shared flow revision."""

    name: Optional[str] = UNSET
    """The resource ID of the parent shared flow."""

    configuration_version: Optional[GoogleCloudApigeeV1ConfigVersion2] = Field(
        default=UNSET, alias="configurationVersion"
    )
    """The version of the configuration schema to which this shared flow conforms. The only supported value currently is
    majorVersion 4 and minorVersion 0. This setting may be used in the future to enable evolution of the shared flow
    format."""

    entity_meta_data_as_properties: Optional[dict[str, str]] = Field(default=UNSET, alias="entityMetaDataAsProperties")
    """A Key-Value map of metadata about this shared flow revision."""

    description: Optional[str] = UNSET
    """Description of the shared flow revision."""

    resources: Optional[list[str]] = UNSET
    """A list of the resources included in this shared flow revision formatted as "{type}://{name}"."""

    revision: Optional[str] = UNSET
    """The resource ID of this revision."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The string "Application"
    """

    context_info: Optional[str] = Field(default=UNSET, alias="contextInfo")
    """A textual description of the shared flow revision."""

    shared_flows: Optional[list[str]] = Field(default=UNSET, alias="sharedFlows")
    """A list of the shared flow names included in this shared flow revision."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The human readable name of this shared flow."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Time at which this shared flow revision was created, in milliseconds since epoch."""

    policies: Optional[list[str]] = UNSET
    """A list of policy names included in this shared flow revision."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Time at which this shared flow revision was most recently modified, in milliseconds since epoch."""


class GoogleCloudApigeeV1SharedFlowRevisionDict(TypedDict):
    resource_files: NotRequired[GoogleCloudApigeeV1ResourceFiles2Dict]
    name: NotRequired[str]
    configuration_version: NotRequired[GoogleCloudApigeeV1ConfigVersion2Dict]
    entity_meta_data_as_properties: NotRequired[dict[str, str]]
    description: NotRequired[str]
    resources: NotRequired[list[str]]
    revision: NotRequired[str]
    type_: NotRequired[str]
    context_info: NotRequired[str]
    shared_flows: NotRequired[list[str]]
    display_name: NotRequired[str]
    created_at: NotRequired[str]
    policies: NotRequired[list[str]]
    last_modified_at: NotRequired[str]
