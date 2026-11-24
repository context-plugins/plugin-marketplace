from __future__ import annotations

from typing import TYPE_CHECKING

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel

if TYPE_CHECKING:
    from .google_analytics_admin_v1_beta_access_filter_expression import (
        GoogleAnalyticsAdminV1BetaAccessFilterExpression,
        GoogleAnalyticsAdminV1BetaAccessFilterExpressionDict,
    )


class GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1(SdkBaseModel):
    """Each of the FilterExpressions in the and_group has an AND relationship."""

    expressions: Optional[list[GoogleAnalyticsAdminV1BetaAccessFilterExpression]] = UNSET
    """A list of filter expressions."""


class GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1Dict(TypedDict):
    expressions: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessFilterExpressionDict]]
