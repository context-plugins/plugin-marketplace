from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_diagram_attachment import CloudDiagramAttachment, CloudDiagramAttachmentDict
from .cloud_diagram_combiner import CloudDiagramCombiner, CloudDiagramCombinerDict
from .cloud_diagram_element import CloudDiagramElement, CloudDiagramElementDict
from .cloud_diagram_export_json_metadata import CloudDiagramExportJsonMetadata, CloudDiagramExportJsonMetadataDict
from .cloud_diagram_group import CloudDiagramGroup, CloudDiagramGroupDict
from .cloud_diagram_link import CloudDiagramLink, CloudDiagramLinkDict
from .cloud_diagram_node import CloudDiagramNode, CloudDiagramNodeDict
from .cloud_diagram_note import CloudDiagramNote, CloudDiagramNoteDict


class CloudDiagramExportJsonResponse(SdkBaseModel):
    """Full diagram export as a structured JSON document."""

    statussheet: Optional[Any] = UNSET
    """Diagram-level metadata (excluding internal IDs)."""

    metadata: CloudDiagramExportJsonMetadata
    """Metadata included in a diagram JSON export."""

    nodes: Optional[list[CloudDiagramNode]] = UNSET
    """Exported nodes."""

    elements: Optional[list[CloudDiagramElement]] = UNSET
    """Exported elements."""

    groups: Optional[list[CloudDiagramGroup]] = UNSET
    """Exported groups."""

    attachments: Optional[list[CloudDiagramAttachment]] = UNSET
    """Exported attachments."""

    links: Optional[list[CloudDiagramLink]] = UNSET
    """Exported links."""

    combiners: Optional[list[CloudDiagramCombiner]] = UNSET
    """Exported combiners."""

    notes: Optional[list[CloudDiagramNote]] = UNSET
    """Exported notes."""


class CloudDiagramExportJsonResponseDict(TypedDict):
    statussheet: NotRequired[Any]
    metadata: CloudDiagramExportJsonMetadataDict
    nodes: NotRequired[list[CloudDiagramNodeDict]]
    elements: NotRequired[list[CloudDiagramElementDict]]
    groups: NotRequired[list[CloudDiagramGroupDict]]
    attachments: NotRequired[list[CloudDiagramAttachmentDict]]
    links: NotRequired[list[CloudDiagramLinkDict]]
    combiners: NotRequired[list[CloudDiagramCombinerDict]]
    notes: NotRequired[list[CloudDiagramNoteDict]]
