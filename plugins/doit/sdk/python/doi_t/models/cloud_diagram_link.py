from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_diagram_component_ref import CloudDiagramComponentRef, CloudDiagramComponentRefDict
from .cloud_diagram_issue import CloudDiagramIssue, CloudDiagramIssueDict
from .enums.cld_type import CldTypeOrStr
from .enums.connection_type import ConnectionTypeOrStr


class CloudDiagramLink(SdkBaseModel):
    """A link component connecting two nodes or groups."""

    id: str = Field(alias="_id")
    """Link ID."""

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

    connection_type: Optional[ConnectionTypeOrStr] = UNSET
    """Link connection type."""

    origin: CloudDiagramComponentRef
    """Reference to a diagram component, including its parent diagram and layer."""

    destination: CloudDiagramComponentRef
    """Reference to a diagram component, including its parent diagram and layer."""

    owner_ss_id: Optional[str] = UNSET
    """Owner layer ID for cross-diagram links."""

    issues: Optional[list[CloudDiagramIssue]] = UNSET
    """Issues associated with this link."""


class CloudDiagramLinkDict(TypedDict):
    id: str
    name: NotRequired[str]
    props: NotRequired[Any]
    cld_id: NotRequired[str]
    cld_type: NotRequired[CldTypeOrStr]
    cld_sync: NotRequired[bool]
    cld_account: NotRequired[str]
    tags: NotRequired[list[str]]
    connection_type: NotRequired[ConnectionTypeOrStr]
    origin: CloudDiagramComponentRefDict
    destination: CloudDiagramComponentRefDict
    owner_ss_id: NotRequired[str]
    issues: NotRequired[list[CloudDiagramIssueDict]]
