from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class BalanceConnectEventsSubscriptionsApi(SdkBaseModel):
    """Vendor account balance information."""

    amount: Optional[float] = UNSET
    last_updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDate")


class BalanceConnectEventsSubscriptionsApiDict(TypedDict):
    amount: NotRequired[float]
    last_updated_date: NotRequired[RFC3339DateTime]
