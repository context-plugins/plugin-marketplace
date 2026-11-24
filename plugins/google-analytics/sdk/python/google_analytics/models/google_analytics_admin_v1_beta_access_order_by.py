from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_access_order_by_dimension_order_by1 import (
    GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1,
    GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1Dict,
)
from .google_analytics_admin_v1_beta_access_order_by_metric_order_by2 import (
    GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2,
    GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2Dict,
)


class GoogleAnalyticsAdminV1BetaAccessOrderBy(SdkBaseModel):
    """Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count
    is one ordering, and ordering rows by the country string is a different ordering."""

    desc: Optional[bool] = UNSET
    """If true, sorts by descending order. If false or unspecified, sorts in ascending order."""

    dimension: Optional[GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1] = UNSET
    """Sorts results by a dimension's values."""

    metric: Optional[GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2] = UNSET
    """Sorts results by a metric's values."""


class GoogleAnalyticsAdminV1BetaAccessOrderByDict(TypedDict):
    desc: NotRequired[bool]
    dimension: NotRequired[GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1Dict]
    metric: NotRequired[GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2Dict]
