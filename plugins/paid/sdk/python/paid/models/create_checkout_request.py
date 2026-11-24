from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .checkout_custom_card_input import CheckoutCustomCardInput, CheckoutCustomCardInputDict
from .checkout_product_input import CheckoutProductInput, CheckoutProductInputDict


class CreateCheckoutRequest(SdkBaseModel):
    products: list[CheckoutProductInput]
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    external_customer_id: Optional[str] = Field(default=UNSET, alias="externalCustomerId")
    """External customer identifier. Creates the customer on first use, resolves to the existing customer on subsequent
    uses."""

    success_url: str = Field(alias="successUrl")
    cancel_url: Optional[str] = Field(default=UNSET, alias="cancelUrl")
    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    metadata: Optional[dict[str, Any]] = UNSET
    collect_address: bool = Field(default=True, alias="collectAddress")
    collect_phone: bool = Field(default=False, alias="collectPhone")
    single_use: bool = Field(default=True, alias="singleUse")
    currency: Optional[str] = UNSET
    """Lock checkout to a specific currency. Omit to allow all currencies supported by the selected plans. If the
    checkout is for a customer with an active subscription, the currency must match that subscription's currency —
    subscriptions cannot change currency."""

    custom_cards: Optional[list[CheckoutCustomCardInput]] = Field(default=UNSET, alias="customCards")
    """Additional informational pricing cards rendered alongside the plans."""


class CreateCheckoutRequestDict(TypedDict):
    products: list[CheckoutProductInputDict]
    customer_id: NotRequired[str]
    external_customer_id: NotRequired[str]
    success_url: str
    cancel_url: NotRequired[str]
    expires_at: NotRequired[RFC3339DateTime]
    metadata: NotRequired[dict[str, Any]]
    collect_address: NotRequired[bool]
    collect_phone: NotRequired[bool]
    single_use: NotRequired[bool]
    currency: NotRequired[str]
    custom_cards: NotRequired[list[CheckoutCustomCardInputDict]]
