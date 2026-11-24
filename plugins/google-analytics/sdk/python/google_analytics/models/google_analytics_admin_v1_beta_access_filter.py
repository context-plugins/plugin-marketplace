from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_access_between_filter2 import (
    GoogleAnalyticsAdminV1BetaAccessBetweenFilter2,
    GoogleAnalyticsAdminV1BetaAccessBetweenFilter2Dict,
)
from .google_analytics_admin_v1_beta_access_in_list_filter1 import (
    GoogleAnalyticsAdminV1BetaAccessInListFilter1,
    GoogleAnalyticsAdminV1BetaAccessInListFilter1Dict,
)
from .google_analytics_admin_v1_beta_access_numeric_filter2 import (
    GoogleAnalyticsAdminV1BetaAccessNumericFilter2,
    GoogleAnalyticsAdminV1BetaAccessNumericFilter2Dict,
)
from .google_analytics_admin_v1_beta_access_string_filter2 import (
    GoogleAnalyticsAdminV1BetaAccessStringFilter2,
    GoogleAnalyticsAdminV1BetaAccessStringFilter2Dict,
)


class GoogleAnalyticsAdminV1BetaAccessFilter(SdkBaseModel):
    """An expression to filter dimension or metric values."""

    between_filter: Optional[GoogleAnalyticsAdminV1BetaAccessBetweenFilter2] = Field(
        default=UNSET, alias="betweenFilter"
    )
    """A filter for two values."""

    numeric_filter: Optional[GoogleAnalyticsAdminV1BetaAccessNumericFilter2] = Field(
        default=UNSET, alias="numericFilter"
    )
    """A filter for numeric or date values."""

    in_list_filter: Optional[GoogleAnalyticsAdminV1BetaAccessInListFilter1] = Field(default=UNSET, alias="inListFilter")
    """A filter for in list values."""

    field_name: Optional[str] = Field(default=UNSET, alias="fieldName")
    """The dimension name or metric name."""

    string_filter: Optional[GoogleAnalyticsAdminV1BetaAccessStringFilter2] = Field(default=UNSET, alias="stringFilter")
    """Strings related filter."""


class GoogleAnalyticsAdminV1BetaAccessFilterDict(TypedDict):
    between_filter: NotRequired[GoogleAnalyticsAdminV1BetaAccessBetweenFilter2Dict]
    numeric_filter: NotRequired[GoogleAnalyticsAdminV1BetaAccessNumericFilter2Dict]
    in_list_filter: NotRequired[GoogleAnalyticsAdminV1BetaAccessInListFilter1Dict]
    field_name: NotRequired[str]
    string_filter: NotRequired[GoogleAnalyticsAdminV1BetaAccessStringFilter2Dict]
