from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClusterRepairAction(str, Enum):
    """Required. Repair action to take on the cluster resource."""

    CLUSTER_REPAIR_ACTION_UNSPECIFIED = "CLUSTER_REPAIR_ACTION_UNSPECIFIED"
    REPAIR_ERROR_DUE_TO_UPDATE_CLUSTER = "REPAIR_ERROR_DUE_TO_UPDATE_CLUSTER"

    __str__ = str.__str__


ClusterRepairActionOrStr: TypeAlias = Annotated[ClusterRepairAction | str, open_enum_validator(ClusterRepairAction)]
