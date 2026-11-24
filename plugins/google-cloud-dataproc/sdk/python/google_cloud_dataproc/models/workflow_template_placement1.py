from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cluster_selector2 import ClusterSelector2, ClusterSelector2Dict
from .managed_cluster2 import ManagedCluster2, ManagedCluster2Dict


class WorkflowTemplatePlacement1(SdkBaseModel):
    """Required. WorkflowTemplate scheduling information."""

    cluster_selector: Optional[ClusterSelector2] = Field(default=UNSET, alias="clusterSelector")
    """Optional. A selector that chooses target cluster for jobs based on metadata.The selector is evaluated at the time
    each job is submitted."""

    managed_cluster: Optional[ManagedCluster2] = Field(default=UNSET, alias="managedCluster")
    """A cluster that is managed by the workflow."""


class WorkflowTemplatePlacement1Dict(TypedDict):
    cluster_selector: NotRequired[ClusterSelector2Dict]
    managed_cluster: NotRequired[ManagedCluster2Dict]
