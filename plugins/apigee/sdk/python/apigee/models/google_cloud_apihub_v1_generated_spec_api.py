from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state1_apigee_projects_api import State1ApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_generated_spec_api_source2 import (
    GoogleCloudApihubV1GeneratedSpecApiSource2,
    GoogleCloudApihubV1GeneratedSpecApiSource2Dict,
)


class GoogleCloudApihubV1GeneratedSpecApi(SdkBaseModel):
    """An API the pipeline is tracking for spec generation."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Output only. Human-readable display name; server-derived."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time at which the resource was last updated."""

    last_spec_generated_time: Optional[str] = Field(default=UNSET, alias="lastSpecGeneratedTime")
    """Output only. The time at which the most recent spec was generated. Unset while ``state ==
    SPEC_API_REGISTERED``."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time at which the resource was created."""

    api: Optional[str] = UNSET
    """Output only. The full resource name of the associated catalog API. Format:
    ``projects/{project}/locations/{location}/apis/{api}``"""

    source: Optional[GoogleCloudApihubV1GeneratedSpecApiSource2] = UNSET
    """Output only. Where the pipeline observed this API."""

    spec: Optional[str] = UNSET
    """Output only. The full resource name of the associated catalog Spec; populated only when ``state ==
    SPEC_ASSOCIATED``. Format: ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}``"""

    deployment: Optional[str] = UNSET
    """Output only. The full resource name of the associated catalog Deployment. Format:
    ``projects/{project}/locations/{location}/deployments/{deployment}``"""

    version: Optional[str] = UNSET
    """Output only. The full resource name of the associated catalog Version. Format:
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}``"""

    state: Optional[State1ApigeeProjectsApiOrStr] = UNSET
    """Output only. The current lifecycle state."""

    name: Optional[str] = UNSET
    """Identifier. The full resource name. The trailing segment is the pipeline-generated identifier. Format:
    ``projects/{project}/locations/{location}/generatedSpecApis/{generated_spec_api}``"""


class GoogleCloudApihubV1GeneratedSpecApiDict(TypedDict):
    display_name: NotRequired[str]
    update_time: NotRequired[str]
    last_spec_generated_time: NotRequired[str]
    create_time: NotRequired[str]
    api: NotRequired[str]
    source: NotRequired[GoogleCloudApihubV1GeneratedSpecApiSource2Dict]
    spec: NotRequired[str]
    deployment: NotRequired[str]
    version: NotRequired[str]
    state: NotRequired[State1ApigeeProjectsApiOrStr]
    name: NotRequired[str]
