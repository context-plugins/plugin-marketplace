from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.operation import OperationOrStr
from .google_analytics_admin_v1_beta_numeric_value2 import (
    GoogleAnalyticsAdminV1BetaNumericValue2,
    GoogleAnalyticsAdminV1BetaNumericValue2Dict,
)


class GoogleAnalyticsAdminV1BetaAccessNumericFilter(SdkBaseModel):
    """Filters for numeric or date values."""

    operation: Optional[OperationOrStr] = UNSET
    """The operation type for this filter."""

    value: Optional[GoogleAnalyticsAdminV1BetaNumericValue2] = UNSET
    """A numeric value or a date value."""


class GoogleAnalyticsAdminV1BetaAccessNumericFilterDict(TypedDict):
    operation: NotRequired[OperationOrStr]
    value: NotRequired[GoogleAnalyticsAdminV1BetaNumericValue2Dict]
