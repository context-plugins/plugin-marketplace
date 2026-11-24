from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlanCreditBenefitCreditGrantTiming(str, Enum):
    ON_PAYMENT = "on_payment"
    ON_INVOICE_POSTED = "on_invoice_posted"
    ON_ORDER_ACTIVATION = "on_order_activation"

    __str__ = str.__str__


PlanCreditBenefitCreditGrantTimingOrStr: TypeAlias = Annotated[
    PlanCreditBenefitCreditGrantTiming | str, open_enum_validator(PlanCreditBenefitCreditGrantTiming)
]
