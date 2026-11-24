from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_doi_t_cloud_diagrams_api import Type1DoiTCloudDiagramsApiOrStr


class DiagramRelationshipsAnchor(SdkBaseModel):
    """The anchor resource the traversal started from."""

    id: str
    """Anchor resource ID (matches the ``rid`` path parameter)."""

    type_: Type1DoiTCloudDiagramsApiOrStr = Field(alias="type")
    """Component bucket the anchor lives in."""

    name: str
    """Human-readable resource name."""

    service_type: Optional[str] = Field(default=UNSET, alias="serviceType")
    """Cloud service type when available (e.g. ``Amazon RDS``, ``GCP Cloud SQL``)."""


class DiagramRelationshipsAnchorDict(TypedDict):
    id: str
    type_: Type1DoiTCloudDiagramsApiOrStr
    name: str
    service_type: NotRequired[str]
