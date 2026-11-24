from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension_metadata1 import DimensionMetadata1, DimensionMetadata1Dict
from .enums.compatibility1 import Compatibility1OrStr


class DimensionCompatibility(SdkBaseModel):
    """The compatibility for a single dimension."""

    compatibility: Optional[Compatibility1OrStr] = UNSET
    """The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be successfully added
    to the report."""

    dimension_metadata: Optional[DimensionMetadata1] = Field(default=UNSET, alias="dimensionMetadata")
    """The dimension metadata contains the API name for this compatibility information. The dimension metadata also
    contains other helpful information like the UI name and description."""


class DimensionCompatibilityDict(TypedDict):
    compatibility: NotRequired[Compatibility1OrStr]
    dimension_metadata: NotRequired[DimensionMetadata1Dict]
