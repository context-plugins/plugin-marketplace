from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoiceStatusPaidOrdersApi(str, Enum):
    DRAFT = "draft"
    OPEN = "open"
    PAID = "paid"
    VOID = "void"
    UNCOLLECTIBLE = "uncollectible"

    __str__ = str.__str__


InvoiceStatusPaidOrdersApiOrStr: TypeAlias = Annotated[
    InvoiceStatusPaidOrdersApi | str, open_enum_validator(InvoiceStatusPaidOrdersApi)
]
