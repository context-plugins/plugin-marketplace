from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.dedication_type import DedicationTypeOrStr
from .enums.payment_method_enum import PaymentMethodEnumOrStr


class StoreTransactionRequest(SdkBaseModel):
    campaign_code: OptionalNullable[str] = UNSET
    campaign_title: Optional[str] = UNSET
    campaign_team_id: OptionalNullable[int] = UNSET
    team_member_id: OptionalNullable[int] = UNSET
    contact_id: OptionalNullable[int] = UNSET
    contact_external_id: OptionalNullable[str] = UNSET
    fund_code: OptionalNullable[str] = UNSET
    method: PaymentMethodEnumOrStr
    transacted_at: RFC3339DateTime
    mark_deposited: OptionalNullable[bool] = UNSET
    timezone: OptionalNullable[str] = UNSET
    acknowledged_at: OptionalNullable[RFC3339DateTime] = UNSET
    external_label: OptionalNullable[str] = UNSET
    external_id: OptionalNullable[str] = UNSET
    contact_contact_since: OptionalNullable[RFC3339DateTime] = UNSET
    amount: str
    fee_covered: OptionalNullable[str] = UNSET
    platform_fee: OptionalNullable[str] = UNSET
    processing_fee: OptionalNullable[str] = UNSET
    check_number: OptionalNullable[str] = UNSET
    check_deposited_at: OptionalNullable[RFC3339DateTime] = UNSET
    company: OptionalNullable[str] = UNSET
    internal_note: OptionalNullable[str] = UNSET
    first_name: OptionalNullable[str] = UNSET
    last_name: OptionalNullable[str] = UNSET
    email: OptionalNullable[str] = UNSET
    phone: OptionalNullable[str] = UNSET
    address_1: OptionalNullable[str] = UNSET
    address_2: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET
    state: OptionalNullable[str] = UNSET
    zipcode: OptionalNullable[str] = UNSET
    country: OptionalNullable[str] = UNSET
    dedication_type: Optional[DedicationTypeOrStr] = UNSET
    dedication_name: OptionalNullable[str] = UNSET
    dedication_recipient_name: OptionalNullable[str] = UNSET
    dedication_recipient_email: OptionalNullable[str] = UNSET
    giving_space_message: OptionalNullable[str] = UNSET
    appeal_code: OptionalNullable[str] = UNSET
    appeal_name: OptionalNullable[str] = UNSET
    appeal_status: OptionalNullable[str] = UNSET


class StoreTransactionRequestDict(TypedDict):
    campaign_code: NotRequired[str | None]
    campaign_title: NotRequired[str]
    campaign_team_id: NotRequired[int | None]
    team_member_id: NotRequired[int | None]
    contact_id: NotRequired[int | None]
    contact_external_id: NotRequired[str | None]
    fund_code: NotRequired[str | None]
    method: PaymentMethodEnumOrStr
    transacted_at: RFC3339DateTime
    mark_deposited: NotRequired[bool | None]
    timezone: NotRequired[str | None]
    acknowledged_at: NotRequired[RFC3339DateTime | None]
    external_label: NotRequired[str | None]
    external_id: NotRequired[str | None]
    contact_contact_since: NotRequired[RFC3339DateTime | None]
    amount: str
    fee_covered: NotRequired[str | None]
    platform_fee: NotRequired[str | None]
    processing_fee: NotRequired[str | None]
    check_number: NotRequired[str | None]
    check_deposited_at: NotRequired[RFC3339DateTime | None]
    company: NotRequired[str | None]
    internal_note: NotRequired[str | None]
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    email: NotRequired[str | None]
    phone: NotRequired[str | None]
    address_1: NotRequired[str | None]
    address_2: NotRequired[str | None]
    city: NotRequired[str | None]
    state: NotRequired[str | None]
    zipcode: NotRequired[str | None]
    country: NotRequired[str | None]
    dedication_type: NotRequired[DedicationTypeOrStr]
    dedication_name: NotRequired[str | None]
    dedication_recipient_name: NotRequired[str | None]
    dedication_recipient_email: NotRequired[str | None]
    giving_space_message: NotRequired[str | None]
    appeal_code: NotRequired[str | None]
    appeal_name: NotRequired[str | None]
    appeal_status: NotRequired[str | None]
