from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.compatibility import CompatibilityOrStr
from .metric_metadata1 import MetricMetadata1, MetricMetadata1Dict


class MetricCompatibility(SdkBaseModel):
    """The compatibility for a single metric."""

    compatibility: Optional[CompatibilityOrStr] = UNSET
    """The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to
    the report."""

    metric_metadata: Optional[MetricMetadata1] = Field(default=UNSET, alias="metricMetadata")
    """The metric metadata contains the API name for this compatibility information. The metric metadata also contains
    other helpful information like the UI name and description."""


class MetricCompatibilityDict(TypedDict):
    compatibility: NotRequired[CompatibilityOrStr]
    metric_metadata: NotRequired[MetricMetadata1Dict]
