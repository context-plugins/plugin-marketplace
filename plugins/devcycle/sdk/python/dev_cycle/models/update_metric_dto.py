from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dimension import DimensionOrStr
from .enums.optimize import OptimizeOrStr


class UpdateMetricDto(SdkBaseModel):
    name: Optional[str] = UNSET
    """Name of the Metric"""

    key: Optional[str] = UNSET
    """Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    description: Optional[str] = UNSET
    """Metric description."""

    event: Optional[str] = UNSET
    """Event associated with metric"""

    dimension: Optional[DimensionOrStr] = UNSET
    """Metric dimension"""

    optimize: Optional[OptimizeOrStr] = UNSET
    """Indicates whether the metric is optimized for increase or decreasae"""


class UpdateMetricDtoDict(TypedDict):
    name: NotRequired[str]
    key: NotRequired[str]
    description: NotRequired[str]
    event: NotRequired[str]
    dimension: NotRequired[DimensionOrStr]
    optimize: NotRequired[OptimizeOrStr]
