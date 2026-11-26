from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .funding_account_connect_events_subscriptions_api import (
    FundingAccountConnectEventsSubscriptionsApi,
    FundingAccountConnectEventsSubscriptionsApiDict,
)


class FundingConnectEventsSubscriptionsApi(SdkBaseModel):
    """Payment funding information."""

    amount: Optional[float] = UNSET
    currency: Optional[str] = UNSET
    funding_account: Optional[FundingAccountConnectEventsSubscriptionsApi] = Field(
        default=UNSET, alias="fundingAccount"
    )
    """Funding account details."""


class FundingConnectEventsSubscriptionsApiDict(TypedDict):
    amount: NotRequired[float]
    currency: NotRequired[str]
    funding_account: NotRequired[FundingAccountConnectEventsSubscriptionsApiDict]
