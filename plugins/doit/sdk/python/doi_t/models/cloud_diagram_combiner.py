from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_diagram_combiner_item import CloudDiagramCombinerItem, CloudDiagramCombinerItemDict


class CloudDiagramCombiner(SdkBaseModel):
    """A combiner component that visually groups multiple components."""

    id: str = Field(alias="_id")
    """Combiner ID."""

    name: Optional[str] = UNSET
    """Combiner name."""

    color: Optional[str] = UNSET
    """Combiner color."""

    icon: Optional[str] = UNSET
    """Combiner icon identifier."""

    items: Optional[list[CloudDiagramCombinerItem]] = UNSET
    """Components contained in the combiner."""


class CloudDiagramCombinerDict(TypedDict):
    id: str
    name: NotRequired[str]
    color: NotRequired[str]
    icon: NotRequired[str]
    items: NotRequired[list[CloudDiagramCombinerItemDict]]
