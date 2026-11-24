from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .checkout_custom_card import CheckoutCustomCard, CheckoutCustomCardDict
from .checkout_product import CheckoutProduct, CheckoutProductDict
from .enums.checkout_status import CheckoutStatusOrStr


class Checkout(SdkBaseModel):
    id: str
    url: str
    status: CheckoutStatusOrStr
    products: list[CheckoutProduct]
    customer_id: str | None = Field(alias="customerId")
    external_customer_id: str | None = Field(alias="externalCustomerId")
    success_url: str = Field(alias="successUrl")
    cancel_url: str | None = Field(alias="cancelUrl")
    expires_at: RFC3339DateTime | None = Field(alias="expiresAt")
    metadata: dict[str, Any] | None
    collect_address: bool = Field(alias="collectAddress")
    collect_phone: bool = Field(alias="collectPhone")
    single_use: bool = Field(alias="singleUse")
    allowed_currencies: list[str] = Field(alias="allowedCurrencies")
    custom_cards: Optional[list[CheckoutCustomCard]] = Field(default=UNSET, alias="customCards")
    """Additional informational pricing cards rendered alongside the plans."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class CheckoutDict(TypedDict):
    id: str
    url: str
    status: CheckoutStatusOrStr
    products: list[CheckoutProductDict]
    customer_id: str | None
    external_customer_id: str | None
    success_url: str
    cancel_url: str | None
    expires_at: RFC3339DateTime | None
    metadata: dict[str, Any] | None
    collect_address: bool
    collect_phone: bool
    single_use: bool
    allowed_currencies: list[str]
    custom_cards: NotRequired[list[CheckoutCustomCardDict]]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
