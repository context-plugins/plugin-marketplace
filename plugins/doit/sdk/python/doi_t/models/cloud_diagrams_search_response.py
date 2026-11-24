from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_diagram_component_search_item import CloudDiagramComponentSearchItem, CloudDiagramComponentSearchItemDict
from .cloud_diagram_scheme_search_item import CloudDiagramSchemeSearchItem, CloudDiagramSchemeSearchItemDict


class CloudDiagramsSearchResponse(SdkBaseModel):
    """Search results grouped into three categories."""

    scheme: Optional[list[CloudDiagramSchemeSearchItem]] = UNSET
    """Diagram layers (cloud accounts) matching the query."""

    component: Optional[list[CloudDiagramComponentSearchItem]] = UNSET
    """Components matching the query by name."""

    prop: Optional[list[CloudDiagramComponentSearchItem]] = UNSET
    """Components matching the query by property values."""


class CloudDiagramsSearchResponseDict(TypedDict):
    scheme: NotRequired[list[CloudDiagramSchemeSearchItemDict]]
    component: NotRequired[list[CloudDiagramComponentSearchItemDict]]
    prop: NotRequired[list[CloudDiagramComponentSearchItemDict]]
