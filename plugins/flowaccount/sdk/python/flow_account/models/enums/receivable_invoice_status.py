from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReceivableInvoiceStatus(int, Enum):
    """1 = Awaiting 3 = Approved 5 = ApprovedAndProcessed 7 = Void 9 = Delete"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9

    __str__ = str.__str__


ReceivableInvoiceStatusOrInt: TypeAlias = Annotated[
    ReceivableInvoiceStatus | int, open_enum_validator(ReceivableInvoiceStatus)
]
