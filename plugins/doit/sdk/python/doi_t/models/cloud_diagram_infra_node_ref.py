from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CloudDiagramInfraNodeRef(SdkBaseModel):
    """Reference to a linked infrastructure node in another diagram."""

    id: str = Field(alias="_id")
    """Infrastructure node ID."""

    scheme_id: str
    """Parent diagram ID."""

    ss_id: str
    """Parent layer ID."""


class CloudDiagramInfraNodeRefDict(TypedDict):
    id: str
    scheme_id: str
    ss_id: str
