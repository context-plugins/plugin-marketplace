from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloudflow_aws_config_request import CloudflowAwsConfigRequest, CloudflowAwsConfigRequestDict
from .cloudflow_collaborator import CloudflowCollaborator, CloudflowCollaboratorDict
from .cloudflow_gcp_config_request import CloudflowGcpConfigRequest, CloudflowGcpConfigRequestDict


class CloudflowV1ConnectionsRequest(SdkBaseModel):
    name: str
    """Human-readable connection name."""

    description: Optional[str] = UNSET
    """Optional description."""

    gcp_config: Optional[CloudflowGcpConfigRequest] = Field(default=UNSET, alias="gcpConfig")
    """GCP connection configuration. Server-owned fields (status, deploymentCommand) are excluded."""

    aws_config: Optional[CloudflowAwsConfigRequest] = Field(default=UNSET, alias="awsConfig")
    """AWS connection configuration. Server-owned fields (context[].status, context[].nextStackOperation, stackSet) are
    excluded."""

    collaborators: Optional[list[CloudflowCollaborator]] = UNSET
    enabled: bool = True
    """When false, the connection is created in a disabled state."""


class CloudflowV1ConnectionsRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    gcp_config: NotRequired[CloudflowGcpConfigRequestDict]
    aws_config: NotRequired[CloudflowAwsConfigRequestDict]
    collaborators: NotRequired[list[CloudflowCollaboratorDict]]
    enabled: NotRequired[bool]
