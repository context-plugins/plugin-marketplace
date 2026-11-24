from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_diagram_group_item import CloudDiagramGroupItem, CloudDiagramGroupItemDict
from .cloud_diagram_issue import CloudDiagramIssue, CloudDiagramIssueDict
from .enums.cld_type import CldTypeOrStr
from .enums.group_type import GroupTypeOrStr


class CloudDiagramGroup(SdkBaseModel):
    """A group component (VPC, subnet, region, cluster, etc.)."""

    id: str = Field(alias="_id")
    """Group ID."""

    name: Optional[str] = UNSET
    """Component name."""

    props: Optional[Any] = UNSET
    """Custom component properties (key-value pairs)."""

    cld_id: Optional[str] = UNSET
    """Cloud resource ID (set on cloud-imported components)."""

    cld_type: Optional[CldTypeOrStr] = UNSET
    """Cloud account type."""

    cld_sync: Optional[bool] = UNSET
    """Whether this component is synced with cloud."""

    cld_account: Optional[str] = UNSET
    """Cloud account ID."""

    tags: Optional[list[str]] = UNSET
    """Tags assigned to the component."""

    group_type: Optional[GroupTypeOrStr] = UNSET
    """Group type."""

    color: Optional[str] = UNSET
    """Group color."""

    icon: Optional[str] = UNSET
    """Group icon identifier."""

    items: Optional[list[CloudDiagramGroupItem]] = UNSET
    """Components contained in the group."""

    issues: Optional[list[CloudDiagramIssue]] = UNSET
    """Issues associated with this group."""


class CloudDiagramGroupDict(TypedDict):
    id: str
    name: NotRequired[str]
    props: NotRequired[Any]
    cld_id: NotRequired[str]
    cld_type: NotRequired[CldTypeOrStr]
    cld_sync: NotRequired[bool]
    cld_account: NotRequired[str]
    tags: NotRequired[list[str]]
    group_type: NotRequired[GroupTypeOrStr]
    color: NotRequired[str]
    icon: NotRequired[str]
    items: NotRequired[list[CloudDiagramGroupItemDict]]
    issues: NotRequired[list[CloudDiagramIssueDict]]
