from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy(SdkBaseModel):
    """Sorts by metric values."""

    metric_name: Optional[str] = Field(default=UNSET, alias="metricName")
    """A metric name in the request to order by."""


class GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderByDict(TypedDict):
    metric_name: NotRequired[str]
