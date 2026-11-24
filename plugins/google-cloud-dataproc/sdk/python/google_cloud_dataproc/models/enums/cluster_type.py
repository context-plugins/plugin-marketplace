from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClusterType(str, Enum):
    """Optional. The type of the cluster."""

    CLUSTER_TYPE_UNSPECIFIED = "CLUSTER_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    SINGLE_NODE = "SINGLE_NODE"
    ZERO_SCALE = "ZERO_SCALE"

    __str__ = str.__str__


ClusterTypeOrStr: TypeAlias = Annotated[ClusterType | str, open_enum_validator(ClusterType)]
