from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state6_apigee_projects_api import State6ApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_curation_config2 import (
    GoogleCloudApihubV1CurationConfig2,
    GoogleCloudApihubV1CurationConfig2Dict,
)
from .google_cloud_apihub_v1_execution_status1 import (
    GoogleCloudApihubV1ExecutionStatus1,
    GoogleCloudApihubV1ExecutionStatus1Dict,
)
from .google_cloud_apihub_v1_resource_config1 import (
    GoogleCloudApihubV1ResourceConfig1,
    GoogleCloudApihubV1ResourceConfig1Dict,
)


class GoogleCloudApihubV1PluginInstanceAction(SdkBaseModel):
    """PluginInstanceAction represents an action which can be executed in the plugin instance."""

    schedule_time_zone: Optional[str] = Field(default=UNSET, alias="scheduleTimeZone")
    """Optional. The time zone for the schedule cron expression. If not provided, UTC will be used."""

    action_id: Optional[str] = Field(default=UNSET, alias="actionId")
    """Required. This should map to one of the action id specified in actions_config in the plugin."""

    schedule_cron_expression: Optional[str] = Field(default=UNSET, alias="scheduleCronExpression")
    """Optional. The schedule for this plugin instance action. This can only be set if the plugin supports
    API_HUB_SCHEDULE_TRIGGER mode for this action."""

    state: Optional[State6ApigeeProjectsApiOrStr] = UNSET
    """Output only. The current state of the plugin action in the plugin instance."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """Optional. The service account used to publish data. Note, the service account will only be accepted for
    non-Google Cloud plugins like OPDK."""

    curation_config: Optional[GoogleCloudApihubV1CurationConfig2] = Field(default=UNSET, alias="curationConfig")
    """Optional. This configuration should be provided if the plugin action is publishing data to API hub curate
    layer."""

    hub_instance_action: Optional[GoogleCloudApihubV1ExecutionStatus1] = Field(default=UNSET, alias="hubInstanceAction")
    """Optional. The execution information for the plugin instance action done corresponding to an API hub instance."""

    resource_config: Optional[GoogleCloudApihubV1ResourceConfig1] = Field(default=UNSET, alias="resourceConfig")
    """Output only. The configuration of resources created for a given plugin instance action. Note these will be
    returned only in case of non-Google Cloud plugins like OPDK."""


class GoogleCloudApihubV1PluginInstanceActionDict(TypedDict):
    schedule_time_zone: NotRequired[str]
    action_id: NotRequired[str]
    schedule_cron_expression: NotRequired[str]
    state: NotRequired[State6ApigeeProjectsApiOrStr]
    service_account: NotRequired[str]
    curation_config: NotRequired[GoogleCloudApihubV1CurationConfig2Dict]
    hub_instance_action: NotRequired[GoogleCloudApihubV1ExecutionStatus1Dict]
    resource_config: NotRequired[GoogleCloudApihubV1ResourceConfig1Dict]
