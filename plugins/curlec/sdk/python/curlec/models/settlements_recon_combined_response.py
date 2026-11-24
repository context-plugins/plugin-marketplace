from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity1_razorpay_disputes_api import Entity1RazorpayDisputesApiOrStr
from .settlement_recon_record import SettlementReconRecord, SettlementReconRecordDict


class SettlementsReconCombinedResponse(SdkBaseModel):
    entity: Optional[Entity1RazorpayDisputesApiOrStr] = UNSET
    count: Optional[int] = UNSET
    """Number of items in the current page."""

    items: Optional[list[SettlementReconRecord]] = UNSET


class SettlementsReconCombinedResponseDict(TypedDict):
    entity: NotRequired[Entity1RazorpayDisputesApiOrStr]
    count: NotRequired[int]
    items: NotRequired[list[SettlementReconRecordDict]]
