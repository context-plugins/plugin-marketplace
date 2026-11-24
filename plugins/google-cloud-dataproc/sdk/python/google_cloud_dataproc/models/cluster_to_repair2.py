from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.cluster_repair_action import ClusterRepairActionOrStr


class ClusterToRepair2(SdkBaseModel):
    """Optional. Cluster to be repaired"""

    cluster_repair_action: Optional[ClusterRepairActionOrStr] = Field(default=UNSET, alias="clusterRepairAction")
    """Required. Repair action to take on the cluster resource."""


class ClusterToRepair2Dict(TypedDict):
    cluster_repair_action: NotRequired[ClusterRepairActionOrStr]
