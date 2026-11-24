from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_diagram_issue import CloudDiagramIssue, CloudDiagramIssueDict
from .enums.cld_type import CldTypeOrStr


class CloudDiagramElement(SdkBaseModel):
    """An element component (application-layer component)."""

    id: str = Field(alias="_id")
    """Element ID."""

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

    color: Optional[str] = UNSET
    """Element color."""

    icon: Optional[str] = UNSET
    """Element icon identifier."""

    parent: Optional[str] = UNSET
    """Parent element ID."""

    issues: Optional[list[CloudDiagramIssue]] = UNSET
    """Issues associated with this element."""


class CloudDiagramElementDict(TypedDict):
    id: str
    name: NotRequired[str]
    props: NotRequired[Any]
    cld_id: NotRequired[str]
    cld_type: NotRequired[CldTypeOrStr]
    cld_sync: NotRequired[bool]
    cld_account: NotRequired[str]
    tags: NotRequired[list[str]]
    color: NotRequired[str]
    icon: NotRequired[str]
    parent: NotRequired[str]
    issues: NotRequired[list[CloudDiagramIssueDict]]
