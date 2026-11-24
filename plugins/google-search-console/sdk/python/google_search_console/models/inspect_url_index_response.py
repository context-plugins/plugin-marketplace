from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .url_inspection_result1 import UrlInspectionResult1, UrlInspectionResult1Dict


class InspectUrlIndexResponse(SdkBaseModel):
    """Index-Status inspection response."""

    inspection_result: Optional[UrlInspectionResult1] = Field(default=UNSET, alias="inspectionResult")
    """URL inspection results."""


class InspectUrlIndexResponseDict(TypedDict):
    inspection_result: NotRequired[UrlInspectionResult1Dict]
