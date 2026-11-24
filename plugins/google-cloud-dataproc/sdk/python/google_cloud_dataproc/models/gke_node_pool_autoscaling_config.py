from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GkeNodePoolAutoscalingConfig(SdkBaseModel):
    """GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to
    the current cluster usage."""

    min_node_count: Optional[int] = Field(default=UNSET, alias="minNodeCount")
    """The minimum number of nodes in the node pool. Must be >= 0 and <= max_node_count."""

    max_node_count: Optional[int] = Field(default=UNSET, alias="maxNodeCount")
    """The maximum number of nodes in the node pool. Must be >= min_node_count, and must be > 0. Note: Quota must be
    sufficient to scale up the cluster."""


class GkeNodePoolAutoscalingConfigDict(TypedDict):
    min_node_count: NotRequired[int]
    max_node_count: NotRequired[int]
