from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FindCloudDiagramsResponse(SdkBaseModel):
    diagram_url: str = Field(alias="diagramUrl")
    """URL to the diagram viewer."""

    image_url: str = Field(alias="imageUrl")
    """URL to the diagram image."""


class FindCloudDiagramsResponseDict(TypedDict):
    diagram_url: str
    image_url: str
