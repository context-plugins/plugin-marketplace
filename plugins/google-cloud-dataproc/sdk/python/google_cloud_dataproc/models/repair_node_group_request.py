from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.repair_action import RepairActionOrStr


class RepairNodeGroupRequest(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A unique ID used to identify the request. If the server receives two RepairNodeGroupRequest with the
    same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend
    is returned.Recommendation: Set this value to a UUID
    (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers
    (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters."""

    repair_action: Optional[RepairActionOrStr] = Field(default=UNSET, alias="repairAction")
    """Required. Repair action to take on specified resources of the node pool."""

    instance_names: Optional[list[str]] = Field(default=UNSET, alias="instanceNames")
    """Required. Name of instances to be repaired. These instances must belong to specified node pool."""


class RepairNodeGroupRequestDict(TypedDict):
    request_id: NotRequired[str]
    repair_action: NotRequired[RepairActionOrStr]
    instance_names: NotRequired[list[str]]
