from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.role1 import Role1OrStr
from .instance_group_config2 import InstanceGroupConfig2, InstanceGroupConfig2Dict


class NodeGroup(SdkBaseModel):
    """Node Group. The NodeGroup resource is not related to the NodeGroupAffinity resource."""

    name: Optional[str] = UNSET
    """The Node group resource name (https://aip.dev/122)."""

    roles: Optional[list[Role1OrStr]] = UNSET
    """Required. Node group roles."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035
    (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63
    characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32
    labels."""

    node_group_config: Optional[InstanceGroupConfig2] = Field(default=UNSET, alias="nodeGroupConfig")
    """Optional. The node group instance group configuration."""


class NodeGroupDict(TypedDict):
    name: NotRequired[str]
    roles: NotRequired[list[Role1OrStr]]
    labels: NotRequired[dict[str, str]]
    node_group_config: NotRequired[InstanceGroupConfig2Dict]
