from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomRegionGeographicAccessScope(SdkBaseModel):
    type_: Literal["customRegion"] = Field(default="customRegion", alias="type")
    """Access is limited to one tenant-owned custom region."""

    custom_region_id: str = Field(alias="customRegionId")
    """Ready custom region owned by the authenticated tenant."""


class CustomRegionGeographicAccessScopeDict(TypedDict):
    type_: Literal["customRegion"]
    custom_region_id: str
