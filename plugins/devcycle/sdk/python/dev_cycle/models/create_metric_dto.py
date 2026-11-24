from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dimension import DimensionOrStr
from .enums.optimize import OptimizeOrStr


class CreateMetricDto(SdkBaseModel):
    name: str
    """Name of the Metric"""

    key: str
    """Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    description: Optional[str] = UNSET
    """Metric description."""

    event: str
    """Event associated with metric"""

    dimension: DimensionOrStr
    """Metric dimension"""

    optimize: OptimizeOrStr
    """Indicates whether the metric is optimized for increase or decreasae"""


class CreateMetricDtoDict(TypedDict):
    name: str
    key: str
    description: NotRequired[str]
    event: str
    dimension: DimensionOrStr
    optimize: OptimizeOrStr
