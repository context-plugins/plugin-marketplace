from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClusterTier(str, Enum):
    """Optional. The cluster tier."""

    CLUSTER_TIER_UNSPECIFIED = "CLUSTER_TIER_UNSPECIFIED"
    CLUSTER_TIER_STANDARD = "CLUSTER_TIER_STANDARD"
    CLUSTER_TIER_PREMIUM = "CLUSTER_TIER_PREMIUM"

    __str__ = str.__str__


ClusterTierOrStr: TypeAlias = Annotated[ClusterTier | str, open_enum_validator(ClusterTier)]
