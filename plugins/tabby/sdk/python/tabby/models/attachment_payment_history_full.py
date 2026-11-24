from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.payment_option import PaymentOptionOrStr


class AttachmentPaymentHistoryFull(SdkBaseModel):
    unique_account_identifier: Optional[str] = UNSET
    """Unique name / number to identify the specific customer account"""

    payment_option: Optional[PaymentOptionOrStr] = UNSET
    """One of - card / direct banking / COD (cash) / other"""

    number_paid_purchases: Optional[float] = UNSET
    total_amount_paid_purchases: Optional[float] = UNSET
    date_of_last_paid_purchase: Optional[Date] = UNSET
    """ISO 8601 date e.g. 2018-10-17"""

    date_of_first_paid_purchase: Optional[Date] = UNSET
    """ISO 8601 date e.g. 2018-10-17"""

    count_paid_purchases_last_month: Optional[float] = UNSET
    amount_paid_purchases_last_month: Optional[float] = UNSET
    max_paid_amount_for_1purchase: Optional[float] = UNSET


class AttachmentPaymentHistoryFullDict(TypedDict):
    unique_account_identifier: NotRequired[str]
    payment_option: NotRequired[PaymentOptionOrStr]
    number_paid_purchases: NotRequired[float]
    total_amount_paid_purchases: NotRequired[float]
    date_of_last_paid_purchase: NotRequired[Date]
    date_of_first_paid_purchase: NotRequired[Date]
    count_paid_purchases_last_month: NotRequired[float]
    amount_paid_purchases_last_month: NotRequired[float]
    max_paid_amount_for_1purchase: NotRequired[float]
