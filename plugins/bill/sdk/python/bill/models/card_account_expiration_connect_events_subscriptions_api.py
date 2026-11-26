from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CardAccountExpirationConnectEventsSubscriptionsApi(SdkBaseModel):
    """Card expiration month and year."""

    year: Optional[str] = UNSET
    month: Optional[str] = UNSET


class CardAccountExpirationConnectEventsSubscriptionsApiDict(TypedDict):
    year: NotRequired[str]
    month: NotRequired[str]
