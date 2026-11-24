from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .additional_info import AdditionalInfo, AdditionalInfoDict
from .address_connect_events_subscriptions_api import (
    AddressConnectEventsSubscriptionsApi,
    AddressConnectEventsSubscriptionsApiDict,
)
from .auto_pay import AutoPay, AutoPayDict
from .balance_connect_events_subscriptions_api import (
    BalanceConnectEventsSubscriptionsApi,
    BalanceConnectEventsSubscriptionsApiDict,
)
from .payment_information_connect_events_subscriptions_api import (
    PaymentInformationConnectEventsSubscriptionsApi,
    PaymentInformationConnectEventsSubscriptionsApiDict,
)


class Vendor1(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    archived: Optional[bool] = UNSET
    payment_network_id: Optional[str] = Field(default=UNSET, alias="paymentNetworkId")
    rpps_id: Optional[str] = Field(default=UNSET, alias="rppsId")
    network_status: Optional[str] = Field(default=UNSET, alias="networkStatus")
    address: Optional[AddressConnectEventsSubscriptionsApi] = UNSET
    """Vendor address information."""

    payment_information: Optional[PaymentInformationConnectEventsSubscriptionsApi] = Field(
        default=UNSET, alias="paymentInformation"
    )
    """Vendor payment information."""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    email: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    recurring_payments: Optional[bool] = Field(default=UNSET, alias="recurringPayments")
    bill_currency: Optional[str] = Field(default=UNSET, alias="billCurrency")
    auto_pay: Optional[AutoPay] = Field(default=UNSET, alias="autoPay")
    """Vendor auto-pay information."""

    balance: Optional[BalanceConnectEventsSubscriptionsApi] = UNSET
    """Vendor account balance information."""

    additional_info: Optional[AdditionalInfo] = Field(default=UNSET, alias="additionalInfo")
    """Vendor additional information."""


class Vendor1Dict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    short_name: NotRequired[str]
    archived: NotRequired[bool]
    payment_network_id: NotRequired[str]
    rpps_id: NotRequired[str]
    network_status: NotRequired[str]
    address: NotRequired[AddressConnectEventsSubscriptionsApiDict]
    payment_information: NotRequired[PaymentInformationConnectEventsSubscriptionsApiDict]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    account_number: NotRequired[str]
    email: NotRequired[str]
    phone: NotRequired[str]
    recurring_payments: NotRequired[bool]
    bill_currency: NotRequired[str]
    auto_pay: NotRequired[AutoPayDict]
    balance: NotRequired[BalanceConnectEventsSubscriptionsApiDict]
    additional_info: NotRequired[AdditionalInfoDict]
