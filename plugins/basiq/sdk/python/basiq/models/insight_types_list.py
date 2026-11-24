from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .insight_type_item import InsightTypeItem, InsightTypeItemDict


class InsightTypesList(SdkBaseModel):
    """Response envelope for GET /insights/types. Contains a list of all supported Insight types and their
    Insight-specific input schemas."""

    type_: Literal["list"] = Field(default="list", alias="type")
    """Resource type identifier, always ``list``."""

    count: int
    """Total number of Insight types returned."""

    data: list[InsightTypeItem]
    """Array of Insight type objects."""


class InsightTypesListDict(TypedDict):
    type_: Literal["list"]
    count: int
    data: list[InsightTypeItemDict]
