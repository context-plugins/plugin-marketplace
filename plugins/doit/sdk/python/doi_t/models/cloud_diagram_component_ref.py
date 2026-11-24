from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_doi_t_cloud_diagrams_api import TypeDoiTCloudDiagramsApiOrStr


class CloudDiagramComponentRef(SdkBaseModel):
    """Reference to a diagram component, including its parent diagram and layer."""

    id: str = Field(alias="_id")
    """Component ID."""

    type_: TypeDoiTCloudDiagramsApiOrStr = Field(alias="type")
    """Component type."""

    scheme_id: str
    """Parent diagram ID."""

    ss_id: str
    """Parent layer ID."""


class CloudDiagramComponentRefDict(TypedDict):
    id: str
    type_: TypeDoiTCloudDiagramsApiOrStr
    scheme_id: str
    ss_id: str
