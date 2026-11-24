from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.deployment_group_type import DeploymentGroupTypeOrStr


class GoogleCloudApigeeV1DeploymentGroupConfig(SdkBaseModel):
    """DeploymentGroupConfig represents a deployment group that should be present in a particular environment."""

    uid: Optional[str] = UNSET
    """Unique ID. The ID will only change if the deployment group is deleted and recreated."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """Revision number which can be used by the runtime to detect if the deployment group has changed between two
    versions."""

    name: Optional[str] = UNSET
    """Name of the deployment group in the following format:
    ``organizations/{org}/environments/{env}/deploymentGroups/{group}``."""

    deployment_group_type: Optional[DeploymentGroupTypeOrStr] = Field(default=UNSET, alias="deploymentGroupType")
    """Type of the deployment group, which will be either Standard or Extensible."""


class GoogleCloudApigeeV1DeploymentGroupConfigDict(TypedDict):
    uid: NotRequired[str]
    revision_id: NotRequired[str]
    name: NotRequired[str]
    deployment_group_type: NotRequired[DeploymentGroupTypeOrStr]
