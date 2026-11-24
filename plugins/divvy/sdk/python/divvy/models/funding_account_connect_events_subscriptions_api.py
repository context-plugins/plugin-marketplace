from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FundingAccountConnectEventsSubscriptionsApi(SdkBaseModel):
    """Funding account details."""

    id: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    name: Optional[str] = UNSET
    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    last4: Optional[str] = UNSET


class FundingAccountConnectEventsSubscriptionsApiDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[str]
    name: NotRequired[str]
    account_number: NotRequired[str]
    last4: NotRequired[str]
