from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state7_apigee_projects_api import State7ApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_auth_config1 import GoogleCloudApihubV1AuthConfig1, GoogleCloudApihubV1AuthConfig1Dict
from .google_cloud_apihub_v1_config_variable import (
    GoogleCloudApihubV1ConfigVariable,
    GoogleCloudApihubV1ConfigVariableDict,
)
from .google_cloud_apihub_v1_plugin_instance_action import (
    GoogleCloudApihubV1PluginInstanceAction,
    GoogleCloudApihubV1PluginInstanceActionDict,
)
from .google_cloud_apihub_v1_source_environment import (
    GoogleCloudApihubV1SourceEnvironment,
    GoogleCloudApihubV1SourceEnvironmentDict,
)


class GoogleCloudApihubV1PluginInstance(SdkBaseModel):
    """Represents a plugin instance resource in the API Hub. A PluginInstance is a specific instance of a hub plugin
    with its own configuration, state, and execution details."""

    additional_config: Optional[dict[str, GoogleCloudApihubV1ConfigVariable]] = Field(
        default=UNSET, alias="additionalConfig"
    )
    """Optional. The additional information for this plugin instance corresponding to the additional config template of
    the plugin. This information will be sent to plugin hosting service on each call to plugin hosted service. The key
    will be the config_variable_template.display_name to uniquely identify the config variable."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Timestamp indicating when the plugin instance was last updated."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The display name for this plugin instance. Max length is 500 characters."""

    state: Optional[State7ApigeeProjectsApiOrStr] = UNSET
    """Output only. The current state of the plugin instance (e.g., enabled, disabled, provisioning)."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Timestamp indicating when the plugin instance was created."""

    actions: Optional[list[GoogleCloudApihubV1PluginInstanceAction]] = UNSET
    """Required. The action status for the plugin instance."""

    source_environments_config: Optional[dict[str, GoogleCloudApihubV1SourceEnvironment]] = Field(
        default=UNSET, alias="sourceEnvironmentsConfig"
    )
    """Optional. The source environment's config present in the gateway instance linked to the plugin instance. The key
    is the ``source_environment`` name from the SourceEnvironment message."""

    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")
    """Output only. Error message describing the failure, if any, during Create, Delete or ApplyConfig operation
    corresponding to the plugin instance.This field will only be populated if the plugin instance is in the ERROR or
    FAILED state."""

    name: Optional[str] = UNSET
    """Identifier. The unique name of the plugin instance resource. Format:
    ``projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}``"""

    source_project_id: Optional[str] = Field(default=UNSET, alias="sourceProjectId")
    """Optional. The source project id of the plugin instance. This will be the id of runtime project in case of Google
    Cloud based plugins and org id in case of non-Google Cloud based plugins. This field will be a required field for
    Google provided on-ramp plugins."""

    auth_config: Optional[GoogleCloudApihubV1AuthConfig1] = Field(default=UNSET, alias="authConfig")
    """Optional. The authentication information for this plugin instance."""


class GoogleCloudApihubV1PluginInstanceDict(TypedDict):
    additional_config: NotRequired[dict[str, GoogleCloudApihubV1ConfigVariableDict]]
    update_time: NotRequired[str]
    display_name: NotRequired[str]
    state: NotRequired[State7ApigeeProjectsApiOrStr]
    create_time: NotRequired[str]
    actions: NotRequired[list[GoogleCloudApihubV1PluginInstanceActionDict]]
    source_environments_config: NotRequired[dict[str, GoogleCloudApihubV1SourceEnvironmentDict]]
    error_message: NotRequired[str]
    name: NotRequired[str]
    source_project_id: NotRequired[str]
    auth_config: NotRequired[GoogleCloudApihubV1AuthConfig1Dict]
