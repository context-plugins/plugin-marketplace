from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecordMarkerDecisionAttributes(SdkBaseModel):
    marker_name: str = Field(alias="markerName")
    """The name of the marker."""

    details: Optional[str] = UNSET
    """The details of the marker."""


class RecordMarkerDecisionAttributesDict(TypedDict):
    marker_name: str
    details: NotRequired[str]
