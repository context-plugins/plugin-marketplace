from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .virtual_card import VirtualCard, VirtualCardDict


class PaymentInformationConnectEventsSubscriptionsApi(SdkBaseModel):
    """Vendor payment information."""

    pay_by_type: Optional[str] = Field(default=UNSET, alias="payByType")
    virtual_card: Optional[VirtualCard] = Field(default=UNSET, alias="virtualCard")
    """Vendor virtual card enrollment information."""

    email: Optional[str] = UNSET
    payee_name: Optional[str] = Field(default=UNSET, alias="payeeName")
    last_payment_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastPaymentDate")


class PaymentInformationConnectEventsSubscriptionsApiDict(TypedDict):
    pay_by_type: NotRequired[str]
    virtual_card: NotRequired[VirtualCardDict]
    email: NotRequired[str]
    payee_name: NotRequired[str]
    last_payment_date: NotRequired[RFC3339DateTime]
