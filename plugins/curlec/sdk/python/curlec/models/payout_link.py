from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact import Contact, ContactDict
from .enums.entity_razorpay_x_payout_links_api import EntityRazorpayXPayoutLinksApiOrStr
from .enums.status_razorpay_x_payout_links_api import StatusRazorpayXPayoutLinksApiOrStr


class PayoutLink(SdkBaseModel):
    """Payout link sent to a contact when fund account details are unavailable."""

    id: Optional[str] = UNSET
    """Payout link ID (poutlk_*)"""

    entity: Optional[EntityRazorpayXPayoutLinksApiOrStr] = UNSET
    contact_id: Optional[str] = UNSET
    contact: Optional[Contact] = UNSET
    amount: Optional[int] = UNSET
    """Amount in paise"""

    currency: Optional[str] = UNSET
    purpose: Optional[str] = UNSET
    status: Optional[StatusRazorpayXPayoutLinksApiOrStr] = UNSET
    fund_account_id: Optional[str] = UNSET
    payout_id: Optional[str] = UNSET
    description: Optional[str] = UNSET
    receipt: Optional[str] = UNSET
    notes: Optional[Any] = UNSET
    send_sms: Optional[bool] = UNSET
    send_email: Optional[bool] = UNSET
    short_url: Optional[str] = UNSET
    attempt_count: Optional[int] = UNSET
    created_at: Optional[int] = UNSET
    cancelled_at: Optional[int] = UNSET
    expire_by: Optional[int] = UNSET
    """Must be at least 15 minutes in the future"""

    expired_at: Optional[int] = UNSET


class PayoutLinkDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayXPayoutLinksApiOrStr]
    contact_id: NotRequired[str]
    contact: NotRequired[ContactDict]
    amount: NotRequired[int]
    currency: NotRequired[str]
    purpose: NotRequired[str]
    status: NotRequired[StatusRazorpayXPayoutLinksApiOrStr]
    fund_account_id: NotRequired[str]
    payout_id: NotRequired[str]
    description: NotRequired[str]
    receipt: NotRequired[str]
    notes: NotRequired[Any]
    send_sms: NotRequired[bool]
    send_email: NotRequired[bool]
    short_url: NotRequired[str]
    attempt_count: NotRequired[int]
    created_at: NotRequired[int]
    cancelled_at: NotRequired[int]
    expire_by: NotRequired[int]
    expired_at: NotRequired[int]
