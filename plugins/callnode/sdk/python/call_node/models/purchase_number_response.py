from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .breakdown import Breakdown, BreakdownDict
from .phone_number import PhoneNumber, PhoneNumberDict
from .wallet import Wallet, WalletDict


class PurchaseNumberResponse(SdkBaseModel):
    number: Optional[PhoneNumber] = UNSET
    charged: Optional[float] = UNSET
    """Amount deducted from your wallet. 0 for included-in-plan numbers and idempotent replays."""

    breakdown: OptionalNullable[Breakdown] = UNSET
    wallet: OptionalNullable[Wallet] = UNSET
    included_in_subscription: Optional[bool] = Field(default=UNSET, alias="includedInSubscription")
    idempotency_replay: Optional[bool] = Field(default=UNSET, alias="idempotencyReplay")
    """True when you already owned this number and nothing was billed."""


class PurchaseNumberResponseDict(TypedDict):
    number: NotRequired[PhoneNumberDict]
    charged: NotRequired[float]
    breakdown: NotRequired[BreakdownDict | None]
    wallet: NotRequired[WalletDict | None]
    included_in_subscription: NotRequired[bool]
    idempotency_replay: NotRequired[bool]
