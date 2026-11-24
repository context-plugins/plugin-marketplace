from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.checkout_product_rejection_reason import CheckoutProductRejectionReasonOrStr


class CheckoutProduct(SdkBaseModel):
    type_: Literal["installments"] = Field(default="installments", alias="type")
    """Type of product."""

    is_available: bool
    rejection_reason: OptionalNullable[CheckoutProductRejectionReasonOrStr] = UNSET
    """The reason why this product is not available to use Possible values:
      * ``order_amount_too_high`` - 'This purchase is above your current spending limit with Tabby, try a smaller cart
            or use another payment method.'
      * ``order_amount_too_low`` - 'The purchase amount is below the minimum amount required to use Tabby, try adding
            more items or use another payment method.'
      * ``not_available`` - 'Sorry, Tabby is unable to approve this purchase, please use an alternative payment method
            for your order.'
      * ``null`` - if ``is_available`` is ``true`` and customer is able to use it."""


class CheckoutProductDict(TypedDict):
    type_: Literal["installments"]
    is_available: bool
    rejection_reason: NotRequired[CheckoutProductRejectionReasonOrStr | None]
