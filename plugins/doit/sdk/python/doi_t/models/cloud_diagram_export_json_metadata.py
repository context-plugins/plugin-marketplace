from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CloudDiagramExportJsonMetadata(SdkBaseModel):
    """Metadata included in a diagram JSON export."""

    user: str
    """Email of the user who triggered the export."""

    date: RFC3339DateTime
    """ISO 8601 timestamp of the export."""

    version: str
    """Export format version."""

    connections: Optional[dict[str, str]] = UNSET
    """Map of component ID to display label for external connections referenced by cross-diagram links."""


class CloudDiagramExportJsonMetadataDict(TypedDict):
    user: str
    date: RFC3339DateTime
    version: str
    connections: NotRequired[dict[str, str]]
