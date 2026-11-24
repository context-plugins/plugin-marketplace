from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClusterType1(str, Enum):
    """Optional. The type of the clusters for which this autoscaling policy is to be configured."""

    CLUSTER_TYPE_UNSPECIFIED = "CLUSTER_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    ZERO_SCALE = "ZERO_SCALE"

    __str__ = str.__str__


ClusterType1OrStr: TypeAlias = Annotated[ClusterType1 | str, open_enum_validator(ClusterType1)]
