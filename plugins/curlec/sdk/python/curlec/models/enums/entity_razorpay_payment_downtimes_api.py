from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayPaymentDowntimesApi(str, Enum):
    PAYMENT_DOWNTIME = "payment.downtime"

    __str__ = str.__str__


EntityRazorpayPaymentDowntimesApiOrStr: TypeAlias = Annotated[
    EntityRazorpayPaymentDowntimesApi | str, open_enum_validator(EntityRazorpayPaymentDowntimesApi)
]
