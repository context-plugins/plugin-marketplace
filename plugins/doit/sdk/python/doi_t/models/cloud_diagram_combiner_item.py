from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_doi_t_cloud_diagrams_api import TypeDoiTCloudDiagramsApiOrStr


class CloudDiagramCombinerItem(SdkBaseModel):
    """A component reference contained within a combiner."""

    id: str = Field(alias="_id")
    """Component ID."""

    type_: TypeDoiTCloudDiagramsApiOrStr = Field(alias="type")
    """Component type."""


class CloudDiagramCombinerItemDict(TypedDict):
    id: str
    type_: TypeDoiTCloudDiagramsApiOrStr
