from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayInvoicesApi(str, Enum):
    INVOICE = "invoice"

    __str__ = str.__str__


EntityRazorpayInvoicesApiOrStr: TypeAlias = Annotated[
    EntityRazorpayInvoicesApi | str, open_enum_validator(EntityRazorpayInvoicesApi)
]
