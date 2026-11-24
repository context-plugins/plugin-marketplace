from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .cloud_diagram_import_state import CloudDiagramImportState, CloudDiagramImportStateDict


class CloudDiagramStatussheetMeta(SdkBaseModel):
    """Projected layer metadata returned inside each layer entry. Contains import state, last updated timestamp, and
    links version."""

    id: str = Field(alias="_id")
    """Layer ID."""

    import_: Optional[CloudDiagramImportState] = Field(default=UNSET, alias="import")
    """Current import/sync state for a cloud-connected diagram."""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """Timestamp of the last update."""

    links_version: Optional[int] = Field(default=UNSET, alias="linksVersion")
    """Links version counter, incremented on every link change."""


class CloudDiagramStatussheetMetaDict(TypedDict):
    id: str
    import_: NotRequired[CloudDiagramImportStateDict]
    updated_at: RFC3339DateTime
    links_version: NotRequired[int]
