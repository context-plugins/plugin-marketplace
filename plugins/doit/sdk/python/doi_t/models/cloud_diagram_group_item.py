from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_doi_t_cloud_diagrams_api import TypeDoiTCloudDiagramsApiOrStr


class CloudDiagramGroupItem(SdkBaseModel):
    """Reference to a component contained within a group."""

    id: str = Field(alias="_id")
    """Component ID."""

    type_: TypeDoiTCloudDiagramsApiOrStr = Field(alias="type")
    """Component type."""


class CloudDiagramGroupItemDict(TypedDict):
    id: str
    type_: TypeDoiTCloudDiagramsApiOrStr
