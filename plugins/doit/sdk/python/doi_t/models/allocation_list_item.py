from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.allocation_type import AllocationTypeOrStr


class AllocationListItem(SdkBaseModel):
    """Summary information for an allocation."""

    id: Optional[str] = UNSET
    """Allocation ID."""

    name: Optional[str] = UNSET
    """Allocation name."""

    owner: Optional[str] = UNSET
    """Allocation owner."""

    description: Optional[str] = UNSET
    """Allocation description."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Type of allocation (preset or custom)."""

    allocation_type: Optional[AllocationTypeOrStr] = Field(default=UNSET, alias="allocationType")
    """Composition type of allocation (single or group)."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The time when the allocation was created (in UNIX timestamp)."""

    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    """Last time the allocation was modified (in UNIX timestamp)."""

    url_ui: Optional[str] = Field(default=UNSET, alias="urlUI")
    """URL to view the allocation in the DoiT console."""

    folder_id: str = Field(default="root", alias="folderId")
    """Identifier of the folder that contains the allocation. Set to "root" if the allocation is at the top level (not
    in a folder)."""

    anomaly_detection: Optional[bool] = Field(default=UNSET, alias="anomalyDetection")
    """Whether anomaly detection is enabled for this allocation. Only applicable to single allocations."""


class AllocationListItemDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    owner: NotRequired[str]
    description: NotRequired[str]
    type_: NotRequired[str]
    allocation_type: NotRequired[AllocationTypeOrStr]
    create_time: NotRequired[int]
    update_time: NotRequired[int]
    url_ui: NotRequired[str]
    folder_id: NotRequired[str]
    anomaly_detection: NotRequired[bool]
