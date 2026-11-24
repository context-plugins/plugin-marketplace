from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckoutProductRejectionReason(str, Enum):
    """The reason why this product is not available to use Possible values:
      * ``order_amount_too_high`` - 'This purchase is above your current spending limit with Tabby, try a smaller cart
            or use another payment method.'
      * ``order_amount_too_low`` - 'The purchase amount is below the minimum amount required to use Tabby, try adding
            more items or use another payment method.'
      * ``not_available`` - 'Sorry, Tabby is unable to approve this purchase, please use an alternative payment method
            for your order.'
      * ``null`` - if ``is_available`` is ``true`` and customer is able to use it."""

    ORDER_AMOUNT_TOO_HIGH = "order_amount_too_high"
    ORDER_AMOUNT_TOO_LOW = "order_amount_too_low"
    NOT_AVAILABLE = "not_available"
    NULL = "null"

    __str__ = str.__str__


CheckoutProductRejectionReasonOrStr: TypeAlias = Annotated[
    CheckoutProductRejectionReason | str, open_enum_validator(CheckoutProductRejectionReason)
]
