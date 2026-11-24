from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .dedication import Dedication, DedicationDict


class UpdateTransactionRequest(SdkBaseModel):
    transaction_id: Optional[str] = UNSET
    internal_note: OptionalNullable[str] = UNSET
    check_number: OptionalNullable[str] = UNSET
    check_deposited_at: OptionalNullable[RFC3339DateTime] = UNSET
    custom_fields: Optional[list[str]] = UNSET
    team_id: Optional[str] = UNSET
    campaign_member_id: Optional[str] = UNSET
    fund_id: Optional[str] = UNSET
    campaign_id: Optional[str] = UNSET
    method: Optional[str] = UNSET
    transacted_at: Optional[str] = UNSET
    appeal_id: Optional[str] = UNSET
    offline_payment_received: Optional[str] = UNSET
    dedication: Optional[Dedication] = UNSET


class UpdateTransactionRequestDict(TypedDict):
    transaction_id: NotRequired[str]
    internal_note: NotRequired[str | None]
    check_number: NotRequired[str | None]
    check_deposited_at: NotRequired[RFC3339DateTime | None]
    custom_fields: NotRequired[list[str]]
    team_id: NotRequired[str]
    campaign_member_id: NotRequired[str]
    fund_id: NotRequired[str]
    campaign_id: NotRequired[str]
    method: NotRequired[str]
    transacted_at: NotRequired[str]
    appeal_id: NotRequired[str]
    offline_payment_received: NotRequired[str]
    dedication: NotRequired[DedicationDict]
