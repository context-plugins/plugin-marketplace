from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """Reason for requesting dispute challenge:
      - ``merchant_reason_other`` - there were other problems with the order that required further clarification;
      - ``merchant_reason_order_on_its_way`` - the order has been confirmed and is in the process of being delivered;
      - ``merchant_reason_order_has_been_already_delivered`` - the order has already been delivered and is complete;
      - ``merchant_reason_order_amount_should_be_different`` - there was a problem with the amount of the order and it
            needed to be changed;
      - ``merchant_reason_problem_with_delivery`` - there was a problem with the order during delivery that needed to be
            adjusted and resolved."""

    MERCHANT_REASON_OTHER = "merchant_reason_other"
    MERCHANT_REASON_ORDER_ON_ITS_WAY = "merchant_reason_order_on_its_way"
    MERCHANT_REASON_ORDER_HAS_BEEN_ALREADY_DELIVERED = "merchant_reason_order_has_been_already_delivered"
    MERCHANT_REASON_ORDER_AMOUNT_SHOULD_BE_DIFFERENT = "merchant_reason_order_amount_should_be_different"
    MERCHANT_REASON_PROBLEM_WITH_DELIVERY = "merchant_reason_problem_with_delivery"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
