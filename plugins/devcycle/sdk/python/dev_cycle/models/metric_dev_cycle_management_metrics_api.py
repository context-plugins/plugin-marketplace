from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.dimension import DimensionOrStr
from .enums.optimize import OptimizeOrStr
from .enums.source_dev_cycle_management_metrics_api import SourceDevCycleManagementMetricsApiOrStr


class MetricDevCycleManagementMetricsApi(SdkBaseModel):
    name: str
    """Name of the Metric"""

    key: str
    """Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    description: Optional[str] = UNSET
    """Metric description."""

    id: str = Field(alias="_id")
    """A unique Metric ID"""

    project: str = Field(alias="_project")
    """The Project owning the Metric"""

    source: Optional[SourceDevCycleManagementMetricsApiOrStr] = UNSET
    """Source that created the Metric"""

    event: str
    """Event associated with metric"""

    dimension: DimensionOrStr
    """Metric dimension"""

    optimize: OptimizeOrStr
    """Indicates whether the metric is optimized for increase or decreasae"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The date the Metric was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The date the Metric was last updated"""


class MetricDevCycleManagementMetricsApiDict(TypedDict):
    name: str
    key: str
    description: NotRequired[str]
    id: str
    project: str
    source: NotRequired[SourceDevCycleManagementMetricsApiOrStr]
    event: str
    dimension: DimensionOrStr
    optimize: OptimizeOrStr
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
