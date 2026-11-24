from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductCreditBenefitInputCreditGrantTiming(str, Enum):
    ON_ORDER_ACTIVATION = "on_order_activation"
    ON_PAYMENT = "on_payment"
    ON_INVOICE_POSTED = "on_invoice_posted"

    __str__ = str.__str__


ProductCreditBenefitInputCreditGrantTimingOrStr: TypeAlias = Annotated[
    ProductCreditBenefitInputCreditGrantTiming | str, open_enum_validator(ProductCreditBenefitInputCreditGrantTiming)
]
