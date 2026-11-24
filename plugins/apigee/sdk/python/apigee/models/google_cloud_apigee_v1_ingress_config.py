from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_environment_group_config import (
    GoogleCloudApigeeV1EnvironmentGroupConfig,
    GoogleCloudApigeeV1EnvironmentGroupConfigDict,
)


class GoogleCloudApigeeV1IngressConfig(SdkBaseModel):
    revision_create_time: Optional[str] = Field(default=UNSET, alias="revisionCreateTime")
    """Time at which the IngressConfig revision was created."""

    uid: Optional[str] = UNSET
    """A unique id for the ingress config that will only change if the organization is deleted and recreated."""

    environment_groups: Optional[list[GoogleCloudApigeeV1EnvironmentGroupConfig]] = Field(
        default=UNSET, alias="environmentGroups"
    )
    """List of environment groups in the organization."""

    name: Optional[str] = UNSET
    """Name of the resource in the following format: ``organizations/{org}/deployedIngressConfig``."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """Revision id that defines the ordering on IngressConfig resources. The higher the revision, the more recently the
    configuration was deployed."""


class GoogleCloudApigeeV1IngressConfigDict(TypedDict):
    revision_create_time: NotRequired[str]
    uid: NotRequired[str]
    environment_groups: NotRequired[list[GoogleCloudApigeeV1EnvironmentGroupConfigDict]]
    name: NotRequired[str]
    revision_id: NotRequired[str]
