from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .cloud_diagram_cost_resource import CloudDiagramCostResource, CloudDiagramCostResourceDict
from .cloud_diagram_cost_service_breakdown import CloudDiagramCostServiceBreakdown, CloudDiagramCostServiceBreakdownDict
from .cloud_diagram_cost_time_range import CloudDiagramCostTimeRange, CloudDiagramCostTimeRangeDict
from .cloud_diagram_cost_trend_bucket import CloudDiagramCostTrendBucket, CloudDiagramCostTrendBucketDict


class CloudDiagramCostSnapshot(SdkBaseModel):
    """Bounded cost snapshot for a diagram layer. Composes the diagram's total spend, period-over-period change, top
    resources by cost (capped at 5), top services by cost (capped at 5), and the most recent 12 trend buckets at the
    requested interval."""

    diagram_id: str = Field(alias="diagramId")
    """Diagram (layer) ID this snapshot was computed for."""

    currency: str
    """Currency the cost numbers are reported in (e.g. ``USD``)."""

    time_range: CloudDiagramCostTimeRange = Field(alias="timeRange")
    """Resolved cost window for the snapshot."""

    total: float
    """Total cost across the entire diagram for the snapshot window."""

    trending_pct: float | None = Field(alias="trendingPct")
    """Period-over-period change as a fraction (e.g. 0.142 = +14.2%). ``null`` when no prior period of equal length is
    available for comparison."""

    top_resources: list[CloudDiagramCostResource] = Field(alias="topResources")
    """Top resources by cost, capped at 5."""

    by_service: list[CloudDiagramCostServiceBreakdown] = Field(alias="byService")
    """Top services by cost, capped at 5."""

    trend: list[CloudDiagramCostTrendBucket]
    """Most recent trend buckets at the requested interval, capped at 12."""


class CloudDiagramCostSnapshotDict(TypedDict):
    diagram_id: str
    currency: str
    time_range: CloudDiagramCostTimeRangeDict
    total: float
    trending_pct: float | None
    top_resources: list[CloudDiagramCostResourceDict]
    by_service: list[CloudDiagramCostServiceBreakdownDict]
    trend: list[CloudDiagramCostTrendBucketDict]
