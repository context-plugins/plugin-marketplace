from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaKeyEventDefaultValue(SdkBaseModel):
    """Defines a default value/currency for a key event."""

    numeric_value: Optional[float] = Field(default=UNSET, alias="numericValue")
    """Required. This will be used to populate the "value" parameter for all occurrences of this Key Event (specified by
    event_name) where that parameter is unset."""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """Required. When an occurrence of this Key Event (specified by event_name) has no set currency this currency will
    be applied as the default. Must be in ISO 4217 currency code format. See https://en.wikipedia.org/wiki/ISO_4217 for
    more information."""


class GoogleAnalyticsAdminV1BetaKeyEventDefaultValueDict(TypedDict):
    numeric_value: NotRequired[float]
    currency_code: NotRequired[str]
