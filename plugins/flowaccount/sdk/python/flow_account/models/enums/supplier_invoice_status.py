from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SupplierInvoiceStatus(int, Enum):
    """0 = None 1 = Awaiting 3 = WaitingForRefund 5 = CreatedBatchFilling 7 = NoRefund"""

    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7

    __str__ = str.__str__


SupplierInvoiceStatusOrInt: TypeAlias = Annotated[
    SupplierInvoiceStatus | int, open_enum_validator(SupplierInvoiceStatus)
]
