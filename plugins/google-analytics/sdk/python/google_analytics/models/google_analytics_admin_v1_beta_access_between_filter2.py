from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_numeric_value1 import (
    GoogleAnalyticsAdminV1BetaNumericValue1,
    GoogleAnalyticsAdminV1BetaNumericValue1Dict,
)
from .google_analytics_admin_v1_beta_numeric_value4 import (
    GoogleAnalyticsAdminV1BetaNumericValue4,
    GoogleAnalyticsAdminV1BetaNumericValue4Dict,
)


class GoogleAnalyticsAdminV1BetaAccessBetweenFilter2(SdkBaseModel):
    """A filter for two values."""

    from_value: Optional[GoogleAnalyticsAdminV1BetaNumericValue4] = Field(default=UNSET, alias="fromValue")
    """Begins with this number."""

    to_value: Optional[GoogleAnalyticsAdminV1BetaNumericValue1] = Field(default=UNSET, alias="toValue")
    """Ends with this number."""


class GoogleAnalyticsAdminV1BetaAccessBetweenFilter2Dict(TypedDict):
    from_value: NotRequired[GoogleAnalyticsAdminV1BetaNumericValue4Dict]
    to_value: NotRequired[GoogleAnalyticsAdminV1BetaNumericValue1Dict]
