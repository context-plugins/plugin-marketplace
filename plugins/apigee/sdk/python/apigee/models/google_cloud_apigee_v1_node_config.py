from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1NodeConfig(SdkBaseModel):
    """NodeConfig for setting the min/max number of nodes associated with the environment."""

    current_aggregate_node_count: Optional[str] = Field(default=UNSET, alias="currentAggregateNodeCount")
    """Output only. The current total number of gateway nodes that each environment currently has across all
    instances."""

    min_node_count: Optional[str] = Field(default=UNSET, alias="minNodeCount")
    """Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified
    environment. If not specified, the default is determined by the recommended minimum number of nodes for that
    gateway."""

    max_node_count: Optional[str] = Field(default=UNSET, alias="maxNodeCount")
    """Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified
    environment. If not specified, the default is determined by the recommended maximum number of nodes for that
    gateway."""


class GoogleCloudApigeeV1NodeConfigDict(TypedDict):
    current_aggregate_node_count: NotRequired[str]
    min_node_count: NotRequired[str]
    max_node_count: NotRequired[str]
