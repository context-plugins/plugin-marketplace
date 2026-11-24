from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .aws_config import AwsConfig, AwsConfigDict
from .cloudflow_collaborator import CloudflowCollaborator, CloudflowCollaboratorDict
from .gcp_config import GcpConfig, GcpConfigDict


class CloudflowConnection(SdkBaseModel):
    """A cloud provider connection used in CloudFlow workflows."""

    connection_id: Optional[str] = Field(default=UNSET, alias="connectionId")
    """Unique identifier for the connection."""

    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    gcp_config: Optional[GcpConfig] = Field(default=UNSET, alias="gcpConfig")
    aws_config: Optional[AwsConfig] = Field(default=UNSET, alias="awsConfig")
    collaborators: Optional[list[CloudflowCollaborator]] = UNSET
    enabled: Optional[bool] = UNSET
    """false when the connection is disabled."""

    status: Optional[str] = UNSET
    """Overall connection status."""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")


class CloudflowConnectionDict(TypedDict):
    connection_id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    gcp_config: NotRequired[GcpConfigDict]
    aws_config: NotRequired[AwsConfigDict]
    collaborators: NotRequired[list[CloudflowCollaboratorDict]]
    enabled: NotRequired[bool]
    status: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
