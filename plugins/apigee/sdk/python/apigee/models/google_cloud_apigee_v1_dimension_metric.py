from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_metric import GoogleCloudApigeeV1Metric, GoogleCloudApigeeV1MetricDict


class GoogleCloudApigeeV1DimensionMetric(SdkBaseModel):
    """Encapsulates a metric grouped by dimension."""

    name: Optional[str] = UNSET
    """Comma joined dimension names. E.g. "dim1_name,dim2_name". Deprecated. If name already has comma before join, we
    may get wrong splits. Please use individual_names."""

    individual_names: Optional[list[str]] = Field(default=UNSET, alias="individualNames")
    """Individual dimension names. E.g. ["dim1_name", "dim2_name"]."""

    metrics: Optional[list[GoogleCloudApigeeV1Metric]] = UNSET
    """List of metrics."""


class GoogleCloudApigeeV1DimensionMetricDict(TypedDict):
    name: NotRequired[str]
    individual_names: NotRequired[list[str]]
    metrics: NotRequired[list[GoogleCloudApigeeV1MetricDict]]
