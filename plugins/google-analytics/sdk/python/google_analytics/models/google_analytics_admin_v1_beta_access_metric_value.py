from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessMetricValue(SdkBaseModel):
    """The value of a metric."""

    value: Optional[str] = UNSET
    """The measurement value. For example, this value may be '13'."""


class GoogleAnalyticsAdminV1BetaAccessMetricValueDict(TypedDict):
    value: NotRequired[str]
