from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudDiagramStatussheetGetRequest(SdkBaseModel):
    """Request body for getting layer components. At least one component type must be provided with one or more IDs."""

    node: Optional[list[str]] = UNSET
    """Node IDs to fetch."""

    element: Optional[list[str]] = UNSET
    """Element IDs to fetch."""

    link: Optional[list[str]] = UNSET
    """Link IDs to fetch."""

    group: Optional[list[str]] = UNSET
    """Group IDs to fetch."""

    attachment: Optional[list[str]] = UNSET
    """Attachment IDs to fetch."""

    note: Optional[list[str]] = UNSET
    """Note IDs to fetch."""

    combiner: Optional[list[str]] = UNSET
    """Combiner IDs to fetch."""


class CloudDiagramStatussheetGetRequestDict(TypedDict):
    node: NotRequired[list[str]]
    element: NotRequired[list[str]]
    link: NotRequired[list[str]]
    group: NotRequired[list[str]]
    attachment: NotRequired[list[str]]
    note: NotRequired[list[str]]
    combiner: NotRequired[list[str]]
