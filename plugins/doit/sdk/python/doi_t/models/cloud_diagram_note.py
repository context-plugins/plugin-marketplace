from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudDiagramNote(SdkBaseModel):
    """A text note placed on the diagram."""

    id: str = Field(alias="_id")
    """Note ID."""

    text: Optional[str] = UNSET
    """Note text content."""

    color: Optional[str] = UNSET
    """Note background color."""

    font_size: Optional[float] = UNSET
    """Note font size."""


class CloudDiagramNoteDict(TypedDict):
    id: str
    text: NotRequired[str]
    color: NotRequired[str]
    font_size: NotRequired[float]
