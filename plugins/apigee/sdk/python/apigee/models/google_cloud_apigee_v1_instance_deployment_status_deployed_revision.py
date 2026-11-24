from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision(SdkBaseModel):
    """Revisions deployed in the MPs."""

    revision: Optional[str] = UNSET
    """API proxy revision reported as deployed."""

    percentage: Optional[int] = UNSET
    """Percentage of MP replicas reporting this revision."""


class GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionDict(TypedDict):
    revision: NotRequired[str]
    percentage: NotRequired[int]
