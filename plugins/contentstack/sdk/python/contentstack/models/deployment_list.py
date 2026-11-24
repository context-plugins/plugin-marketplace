from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .deployment import Deployment, DeploymentDict


class DeploymentList(SdkBaseModel):
    """A list of deployments."""

    data: Optional[list[Deployment]] = UNSET
    """Array of deployment objects."""


class DeploymentListDict(TypedDict):
    data: NotRequired[list[DeploymentDict]]
