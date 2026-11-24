from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_diagram_scheme_result import CloudDiagramSchemeResult, CloudDiagramSchemeResultDict
from .cloud_diagram_statussheet_data import CloudDiagramStatussheetData, CloudDiagramStatussheetDataDict


class CloudDiagramsGetResponse(SdkBaseModel):
    """Diagram and layer data. When called with an empty body, only the diagram map is populated. When called with a
    populated body, both diagram and layer maps are returned with components projected to key display and cloud fields
    by default."""

    scheme: Optional[dict[str, CloudDiagramSchemeResult]] = UNSET
    """Map of diagram ID to diagram with its connected cloud accounts."""

    statussheet: Optional[dict[str, CloudDiagramStatussheetData]] = UNSET
    """Map of layer ID to layer metadata and component collections. Components are projected to key display and cloud
    fields by default."""

    template: Optional[Any] = UNSET
    """Map of template layer ID to template data."""


class CloudDiagramsGetResponseDict(TypedDict):
    scheme: NotRequired[dict[str, CloudDiagramSchemeResultDict]]
    statussheet: NotRequired[dict[str, CloudDiagramStatussheetDataDict]]
    template: NotRequired[Any]
