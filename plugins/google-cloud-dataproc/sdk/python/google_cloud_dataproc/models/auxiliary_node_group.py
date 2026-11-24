from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .node_group2 import NodeGroup2, NodeGroup2Dict


class AuxiliaryNodeGroup(SdkBaseModel):
    """Node group identification and configuration information."""

    node_group: Optional[NodeGroup2] = Field(default=UNSET, alias="nodeGroup")
    """Required. Node group configuration."""

    node_group_id: Optional[str] = Field(default=UNSET, alias="nodeGroupId")
    """Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9),
    underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33
    characters."""


class AuxiliaryNodeGroupDict(TypedDict):
    node_group: NotRequired[NodeGroup2Dict]
    node_group_id: NotRequired[str]
