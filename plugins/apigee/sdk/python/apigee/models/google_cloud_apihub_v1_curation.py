from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.last_execution_error_code import LastExecutionErrorCodeOrStr
from .enums.last_execution_state import LastExecutionStateOrStr
from .google_cloud_apihub_v1_endpoint1 import GoogleCloudApihubV1Endpoint1, GoogleCloudApihubV1Endpoint1Dict
from .google_cloud_apihub_v1_plugin_instance_action_id import (
    GoogleCloudApihubV1PluginInstanceActionId,
    GoogleCloudApihubV1PluginInstanceActionIdDict,
)


class GoogleCloudApihubV1Curation(SdkBaseModel):
    """A curation resource in the API Hub."""

    last_execution_error_message: Optional[str] = Field(default=UNSET, alias="lastExecutionErrorMessage")
    """Output only. Error message describing the failure, if any, during the last execution of the curation."""

    last_execution_state: Optional[LastExecutionStateOrStr] = Field(default=UNSET, alias="lastExecutionState")
    """Output only. The last execution state of the curation."""

    last_execution_error_code: Optional[LastExecutionErrorCodeOrStr] = Field(
        default=UNSET, alias="lastExecutionErrorCode"
    )
    """Output only. The error code of the last execution of the curation. The error code is populated only when the last
    execution state is failed."""

    name: Optional[str] = UNSET
    """Identifier. The name of the curation. Format: ``projects/{project}/locations/{location}/curations/{curation}``"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The display name of the curation."""

    endpoint: Optional[GoogleCloudApihubV1Endpoint1] = UNSET
    """Required. The endpoint to be triggered for curation."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the curation was created."""

    plugin_instance_actions: Optional[list[GoogleCloudApihubV1PluginInstanceActionId]] = Field(
        default=UNSET, alias="pluginInstanceActions"
    )
    """Output only. The plugin instances and associated actions that are using the curation. Note: A particular curation
    could be used by multiple plugin instances or multiple actions in a plugin instance."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the curation was last updated."""

    description: Optional[str] = UNSET
    """Optional. The description of the curation."""


class GoogleCloudApihubV1CurationDict(TypedDict):
    last_execution_error_message: NotRequired[str]
    last_execution_state: NotRequired[LastExecutionStateOrStr]
    last_execution_error_code: NotRequired[LastExecutionErrorCodeOrStr]
    name: NotRequired[str]
    display_name: NotRequired[str]
    endpoint: NotRequired[GoogleCloudApihubV1Endpoint1Dict]
    create_time: NotRequired[str]
    plugin_instance_actions: NotRequired[list[GoogleCloudApihubV1PluginInstanceActionIdDict]]
    update_time: NotRequired[str]
    description: NotRequired[str]
