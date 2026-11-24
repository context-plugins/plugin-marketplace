from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2(SdkBaseModel):
    """Optional. Defines a default value/currency for a conversion event."""

    value: Optional[float] = UNSET
    """This value will be used to populate the value for all conversions of the specified event_name where the event
    "value" parameter is unset."""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """When a conversion event for this event_name has no set currency, this currency will be applied as the default.
    Must be in ISO 4217 currency code format. See https://en.wikipedia.org/wiki/ISO_4217 for more information."""


class GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2Dict(TypedDict):
    value: NotRequired[float]
    currency_code: NotRequired[str]
