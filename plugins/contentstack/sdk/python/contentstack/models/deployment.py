from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_contentstack_launch_deployments_api import StatusContentstackLaunchDeploymentsApiOrStr


class Deployment(SdkBaseModel):
    """A deployment operation to a Launch environment."""

    uid: Optional[str] = UNSET
    """Unique identifier of the deployment."""

    status: Optional[StatusContentstackLaunchDeploymentsApiOrStr] = UNSET
    """Current status of the deployment."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the deployment was created."""

    completed_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the deployment completed."""


class DeploymentDict(TypedDict):
    uid: NotRequired[str]
    status: NotRequired[StatusContentstackLaunchDeploymentsApiOrStr]
    created_at: NotRequired[RFC3339DateTime]
    completed_at: NotRequired[RFC3339DateTime]
