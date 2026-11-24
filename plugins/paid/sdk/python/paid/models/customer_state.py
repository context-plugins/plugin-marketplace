from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .customer_state_checkout_link import CustomerStateCheckoutLink, CustomerStateCheckoutLinkDict
from .customer_state_credit_summary import CustomerStateCreditSummary, CustomerStateCreditSummaryDict
from .customer_state_customer import CustomerStateCustomer, CustomerStateCustomerDict
from .customer_state_order import CustomerStateOrder, CustomerStateOrderDict
from .customer_state_seats import CustomerStateSeats, CustomerStateSeatsDict


class CustomerState(SdkBaseModel):
    customer: CustomerStateCustomer
    default_currency: str = Field(alias="defaultCurrency")
    """ISO 4217 currency code, for example USD, EUR, or GBP."""

    orders: list[CustomerStateOrder]
    seats: CustomerStateSeats
    checkout_links: list[CustomerStateCheckoutLink] = Field(alias="checkoutLinks")
    credits: CustomerStateCreditSummary
    timestamp: RFC3339DateTime


class CustomerStateDict(TypedDict):
    customer: CustomerStateCustomerDict
    default_currency: str
    orders: list[CustomerStateOrderDict]
    seats: CustomerStateSeatsDict
    checkout_links: list[CustomerStateCheckoutLinkDict]
    credits: CustomerStateCreditSummaryDict
    timestamp: RFC3339DateTime
