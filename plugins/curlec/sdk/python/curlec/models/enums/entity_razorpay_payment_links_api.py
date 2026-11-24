from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayPaymentLinksApi(str, Enum):
    PAYMENT_LINK = "payment_link"

    __str__ = str.__str__


EntityRazorpayPaymentLinksApiOrStr: TypeAlias = Annotated[
    EntityRazorpayPaymentLinksApi | str, open_enum_validator(EntityRazorpayPaymentLinksApi)
]
