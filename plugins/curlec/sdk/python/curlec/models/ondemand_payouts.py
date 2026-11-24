from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity1_razorpay_disputes_api import Entity1RazorpayDisputesApiOrStr
from .instant_settlement_payout import InstantSettlementPayout, InstantSettlementPayoutDict


class OndemandPayouts(SdkBaseModel):
    """Collection of individual payout records for this instant settlement."""

    entity: Optional[Entity1RazorpayDisputesApiOrStr] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[InstantSettlementPayout]] = UNSET


class OndemandPayoutsDict(TypedDict):
    entity: NotRequired[Entity1RazorpayDisputesApiOrStr]
    count: NotRequired[int]
    items: NotRequired[list[InstantSettlementPayoutDict]]
