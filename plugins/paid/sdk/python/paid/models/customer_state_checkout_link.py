from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.customer_state_checkout_link_status import CustomerStateCheckoutLinkStatusOrStr


class CustomerStateCheckoutLink(SdkBaseModel):
    id: str
    url: str
    status: CustomerStateCheckoutLinkStatusOrStr
    product_ids: list[str] = Field(alias="productIds")
    single_use: bool = Field(alias="singleUse")
    allowed_currencies: list[str] = Field(alias="allowedCurrencies")
    expires_at: RFC3339DateTime | None = Field(alias="expiresAt")


class CustomerStateCheckoutLinkDict(TypedDict):
    id: str
    url: str
    status: CustomerStateCheckoutLinkStatusOrStr
    product_ids: list[str]
    single_use: bool
    allowed_currencies: list[str]
    expires_at: RFC3339DateTime | None
