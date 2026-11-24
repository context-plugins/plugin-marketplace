from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.repair_action1 import RepairAction1OrStr


class NodePool(SdkBaseModel):
    """indicating a list of workers of same type"""

    id: Optional[str] = UNSET
    """Required. A unique id of the node pool. Primary and Secondary workers can be specified using special reserved ids
    PRIMARY_WORKER_POOL and SECONDARY_WORKER_POOL respectively. Aux node pools can be referenced using corresponding
    pool id."""

    instance_names: Optional[list[str]] = Field(default=UNSET, alias="instanceNames")
    """Name of instances to be repaired. These instances must belong to specified node pool."""

    repair_action: Optional[RepairAction1OrStr] = Field(default=UNSET, alias="repairAction")
    """Required. Repair action to take on specified resources of the node pool."""


class NodePoolDict(TypedDict):
    id: NotRequired[str]
    instance_names: NotRequired[list[str]]
    repair_action: NotRequired[RepairAction1OrStr]
