from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_diagram_attachment import CloudDiagramAttachment, CloudDiagramAttachmentDict
from .cloud_diagram_combiner import CloudDiagramCombiner, CloudDiagramCombinerDict
from .cloud_diagram_element import CloudDiagramElement, CloudDiagramElementDict
from .cloud_diagram_group import CloudDiagramGroup, CloudDiagramGroupDict
from .cloud_diagram_link import CloudDiagramLink, CloudDiagramLinkDict
from .cloud_diagram_node import CloudDiagramNode, CloudDiagramNodeDict
from .cloud_diagram_note import CloudDiagramNote, CloudDiagramNoteDict


class CloudDiagramStatussheetComponents(SdkBaseModel):
    """Component collections of a diagram layer, keyed by component ID."""

    node: Optional[dict[str, CloudDiagramNode]] = UNSET
    """Map of node ID to node component."""

    element: Optional[dict[str, CloudDiagramElement]] = UNSET
    """Map of element ID to element component."""

    group: Optional[dict[str, CloudDiagramGroup]] = UNSET
    """Map of group ID to group component."""

    link: Optional[dict[str, CloudDiagramLink]] = UNSET
    """Map of link ID to link component."""

    attachment: Optional[dict[str, CloudDiagramAttachment]] = UNSET
    """Map of attachment ID to attachment component."""

    combiner: Optional[dict[str, CloudDiagramCombiner]] = UNSET
    """Map of combiner ID to combiner component."""

    note: Optional[dict[str, CloudDiagramNote]] = UNSET
    """Map of note ID to note component."""


class CloudDiagramStatussheetComponentsDict(TypedDict):
    node: NotRequired[dict[str, CloudDiagramNodeDict]]
    element: NotRequired[dict[str, CloudDiagramElementDict]]
    group: NotRequired[dict[str, CloudDiagramGroupDict]]
    link: NotRequired[dict[str, CloudDiagramLinkDict]]
    attachment: NotRequired[dict[str, CloudDiagramAttachmentDict]]
    combiner: NotRequired[dict[str, CloudDiagramCombinerDict]]
    note: NotRequired[dict[str, CloudDiagramNoteDict]]
