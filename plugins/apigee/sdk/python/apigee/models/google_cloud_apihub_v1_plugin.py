from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.gateway_type_apigee_projects_api import GatewayTypeApigeeProjectsApiOrStr
from .enums.ownership_type import OwnershipTypeOrStr
from .enums.plugin_category import PluginCategoryOrStr
from .enums.state3_apigee_projects_api import State3ApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_attribute_values19 import (
    GoogleCloudApihubV1AttributeValues19,
    GoogleCloudApihubV1AttributeValues19Dict,
)
from .google_cloud_apihub_v1_config_template2 import (
    GoogleCloudApihubV1ConfigTemplate2,
    GoogleCloudApihubV1ConfigTemplate2Dict,
)
from .google_cloud_apihub_v1_documentation5 import (
    GoogleCloudApihubV1Documentation5,
    GoogleCloudApihubV1Documentation5Dict,
)
from .google_cloud_apihub_v1_hosting_service2 import (
    GoogleCloudApihubV1HostingService2,
    GoogleCloudApihubV1HostingService2Dict,
)
from .google_cloud_apihub_v1_plugin_action_config import (
    GoogleCloudApihubV1PluginActionConfig,
    GoogleCloudApihubV1PluginActionConfigDict,
)


class GoogleCloudApihubV1Plugin(SdkBaseModel):
    """A plugin resource in the API Hub."""

    hosting_service: Optional[GoogleCloudApihubV1HostingService2] = Field(default=UNSET, alias="hostingService")
    """Optional. This field is optional. It is used to notify the plugin hosting service for any lifecycle changes of
    the plugin instance and trigger execution of plugin instance actions in case of API hub managed actions. This field
    should be provided if the plugin instance lifecycle of the developed plugin needs to be managed from API hub. Also,
    in this case the plugin hosting service interface needs to be implemented. This field should not be provided if the
    plugin wants to manage plugin instance lifecycle events outside of hub interface and use plugin framework for only
    registering of plugin and plugin instances to capture the source of data into hub. Note, in this case the plugin
    hosting service interface is not required to be implemented. Also, the plugin instance lifecycle actions will be
    disabled from API hub's UI."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The display name of the plugin. Max length is 500 characters (Unicode code points)."""

    config_template: Optional[GoogleCloudApihubV1ConfigTemplate2] = Field(default=UNSET, alias="configTemplate")
    """Optional. The configuration template for the plugin."""

    description: Optional[str] = UNSET
    """Optional. The plugin description. Max length is 500000 characters (Unicode code points)."""

    actions_config: Optional[list[GoogleCloudApihubV1PluginActionConfig]] = Field(default=UNSET, alias="actionsConfig")
    """Optional. The configuration of actions supported by the plugin. **REQUIRED**: This field must be provided when
    creating or updating a Plugin. The server will reject requests if this field is missing."""

    ownership_type: Optional[OwnershipTypeOrStr] = Field(default=UNSET, alias="ownershipType")
    """Output only. The type of the plugin, indicating whether it is 'SYSTEM_OWNED' or 'USER_OWNED'."""

    plugin_category: Optional[PluginCategoryOrStr] = Field(default=UNSET, alias="pluginCategory")
    """Optional. The category of the plugin, identifying its primary category or purpose. This field is required for all
    plugins."""

    documentation: Optional[GoogleCloudApihubV1Documentation5] = UNSET
    """Optional. The documentation of the plugin, that explains how to set up and use the plugin."""

    state: Optional[State3ApigeeProjectsApiOrStr] = UNSET
    """Output only. Represents the state of the plugin. Note this field will not be set for plugins developed via plugin
    framework as the state will be managed at plugin instance level."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Timestamp indicating when the plugin was last updated."""

    name: Optional[str] = UNSET
    """Identifier. The name of the plugin. Format: ``projects/{project}/locations/{location}/plugins/{plugin}``"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Timestamp indicating when the plugin was created."""

    gateway_type: Optional[GatewayTypeApigeeProjectsApiOrStr] = Field(default=UNSET, alias="gatewayType")
    """Optional. The type of the gateway."""

    type_: Optional[GoogleCloudApihubV1AttributeValues19] = Field(default=UNSET, alias="type")
    """Optional. The type of the API. This maps to the following system defined attribute:
    ``projects/{project}/locations/{location}/attributes/system-plugin-type`` attribute. The number of allowed values
    for this attribute will be based on the cardinality of the attribute. The same can be retrieved via GetAttribute
    API. All values should be from the list of allowed values defined for the attribute. Note this field is not required
    for plugins developed via plugin framework."""


class GoogleCloudApihubV1PluginDict(TypedDict):
    hosting_service: NotRequired[GoogleCloudApihubV1HostingService2Dict]
    display_name: NotRequired[str]
    config_template: NotRequired[GoogleCloudApihubV1ConfigTemplate2Dict]
    description: NotRequired[str]
    actions_config: NotRequired[list[GoogleCloudApihubV1PluginActionConfigDict]]
    ownership_type: NotRequired[OwnershipTypeOrStr]
    plugin_category: NotRequired[PluginCategoryOrStr]
    documentation: NotRequired[GoogleCloudApihubV1Documentation5Dict]
    state: NotRequired[State3ApigeeProjectsApiOrStr]
    update_time: NotRequired[str]
    name: NotRequired[str]
    create_time: NotRequired[str]
    gateway_type: NotRequired[GatewayTypeApigeeProjectsApiOrStr]
    type_: NotRequired[GoogleCloudApihubV1AttributeValues19Dict]
