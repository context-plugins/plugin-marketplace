from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_access_filter_expression import (
    GoogleAnalyticsAdminV1BetaAccessFilterExpression,
    GoogleAnalyticsAdminV1BetaAccessFilterExpressionDict,
)


class GoogleAnalyticsAdminV1BetaAccessFilterExpressionList(SdkBaseModel):
    """A list of filter expressions."""

    expressions: Optional[list[GoogleAnalyticsAdminV1BetaAccessFilterExpression]] = UNSET
    """A list of filter expressions."""


class GoogleAnalyticsAdminV1BetaAccessFilterExpressionListDict(TypedDict):
    expressions: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessFilterExpressionDict]]
