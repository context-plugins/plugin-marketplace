from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillPaymentStatusDto(str, Enum):
    """Payment Status of a bill."""

    PAID = "PAID"
    UNPAID = "UNPAID"
    PARTIALLY_PAID = "PARTIALLY_PAID"
    SCHEDULED = "SCHEDULED"
    IN_PROCESS = "IN_PROCESS"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


BillPaymentStatusDtoOrStr: TypeAlias = Annotated[BillPaymentStatusDto | str, open_enum_validator(BillPaymentStatusDto)]
