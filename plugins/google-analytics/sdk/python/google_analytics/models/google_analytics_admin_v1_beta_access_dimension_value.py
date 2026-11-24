from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessDimensionValue(SdkBaseModel):
    """The value of a dimension."""

    value: Optional[str] = UNSET
    """The dimension value. For example, this value may be 'France' for the 'country' dimension."""


class GoogleAnalyticsAdminV1BetaAccessDimensionValueDict(TypedDict):
    value: NotRequired[str]
