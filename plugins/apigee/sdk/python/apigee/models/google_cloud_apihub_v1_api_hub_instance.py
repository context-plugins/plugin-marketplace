from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state4_apigee_projects_api import State4ApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_config2 import GoogleCloudApihubV1Config2, GoogleCloudApihubV1Config2Dict


class GoogleCloudApihubV1ApiHubInstance(SdkBaseModel):
    """An ApiHubInstance represents the instance resources of the API Hub. Currently, only one ApiHub instance is
    allowed for each project."""

    state: Optional[State4ApigeeProjectsApiOrStr] = UNSET
    """Output only. The current state of the ApiHub instance."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Creation timestamp."""

    name: Optional[str] = UNSET
    """Identifier. Format: ``projects/{project}/locations/{location}/apiHubInstances/{apiHubInstance}``."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Last update timestamp."""

    config: Optional[GoogleCloudApihubV1Config2] = UNSET
    """Required. Config of the ApiHub instance."""

    state_message: Optional[str] = Field(default=UNSET, alias="stateMessage")
    """Output only. Extra information about ApiHub instance state. Currently the message would be populated when state
    is ``FAILED``."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more
    details. https://cloud.google.com/compute/docs/labeling-resources"""

    description: Optional[str] = UNSET
    """Optional. Description of the ApiHub instance."""


class GoogleCloudApihubV1ApiHubInstanceDict(TypedDict):
    state: NotRequired[State4ApigeeProjectsApiOrStr]
    create_time: NotRequired[str]
    name: NotRequired[str]
    update_time: NotRequired[str]
    config: NotRequired[GoogleCloudApihubV1Config2Dict]
    state_message: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    description: NotRequired[str]
