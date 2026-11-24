from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_diagram_import_state import CloudDiagramImportState, CloudDiagramImportStateDict
from .cloud_diagram_stats_change import CloudDiagramStatsChange, CloudDiagramStatsChangeDict
from .enums.type7 import Type7OrStr


class CloudDiagramStats(SdkBaseModel):
    """Diagram with activity stats for a given time period."""

    id: Optional[str] = Field(default=UNSET, alias="_id")
    """ID of the diagram."""

    ss_id: Optional[str] = UNSET
    """ID of the layer the diagram belongs to."""

    name: Optional[str] = UNSET
    """Name of the diagram."""

    type_: Optional[Type7OrStr] = Field(default=UNSET, alias="type")
    """Type of the diagram."""

    account_name: Optional[str] = UNSET
    """Cloud account name."""

    account_id: Optional[str] = UNSET
    """Cloud account ID."""

    account_type: Optional[str] = UNSET
    """Cloud account type."""

    changes: Optional[list[CloudDiagramStatsChange]] = UNSET
    """Activity changes within the period."""

    import_: Optional[CloudDiagramImportState] = Field(default=UNSET, alias="import")
    """Current import/sync state for a cloud-connected diagram."""


class CloudDiagramStatsDict(TypedDict):
    id: NotRequired[str]
    ss_id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[Type7OrStr]
    account_name: NotRequired[str]
    account_id: NotRequired[str]
    account_type: NotRequired[str]
    changes: NotRequired[list[CloudDiagramStatsChangeDict]]
    import_: NotRequired[CloudDiagramImportStateDict]
