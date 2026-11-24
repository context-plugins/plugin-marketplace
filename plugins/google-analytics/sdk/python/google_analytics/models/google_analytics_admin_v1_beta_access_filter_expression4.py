from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_access_filter2 import (
    GoogleAnalyticsAdminV1BetaAccessFilter2,
    GoogleAnalyticsAdminV1BetaAccessFilter2Dict,
)
from .google_analytics_admin_v1_beta_access_filter_expression2 import (
    GoogleAnalyticsAdminV1BetaAccessFilterExpression2,
    GoogleAnalyticsAdminV1BetaAccessFilterExpression2Dict,
)
from .google_analytics_admin_v1_beta_access_filter_expression_list1 import (
    GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1,
    GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1Dict,
)
from .google_analytics_admin_v1_beta_access_filter_expression_list3 import (
    GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3,
    GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3Dict,
)


class GoogleAnalyticsAdminV1BetaAccessFilterExpression4(SdkBaseModel):
    """Metric filters allow you to restrict report response to specific metric values which match the filter. Metric
    filters are applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in
    this filter."""

    access_filter: Optional[GoogleAnalyticsAdminV1BetaAccessFilter2] = Field(default=UNSET, alias="accessFilter")
    """A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all
    dimensions or all metrics."""

    or_group: Optional[GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3] = Field(default=UNSET, alias="orGroup")
    """Each of the FilterExpressions in the or_group has an OR relationship."""

    and_group: Optional[GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1] = Field(default=UNSET, alias="andGroup")
    """Each of the FilterExpressions in the and_group has an AND relationship."""

    not_expression: Optional[GoogleAnalyticsAdminV1BetaAccessFilterExpression2] = Field(
        default=UNSET, alias="notExpression"
    )
    """The FilterExpression is NOT of not_expression."""


class GoogleAnalyticsAdminV1BetaAccessFilterExpression4Dict(TypedDict):
    access_filter: NotRequired[GoogleAnalyticsAdminV1BetaAccessFilter2Dict]
    or_group: NotRequired[GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3Dict]
    and_group: NotRequired[GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1Dict]
    not_expression: NotRequired[GoogleAnalyticsAdminV1BetaAccessFilterExpression2Dict]
