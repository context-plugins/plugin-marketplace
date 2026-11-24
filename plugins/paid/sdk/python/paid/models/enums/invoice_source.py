from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoiceSource(str, Enum):
    ORDER_BASED = "order_based"
    MANUAL = "manual"

    __str__ = str.__str__


InvoiceSourceOrStr: TypeAlias = Annotated[InvoiceSource | str, open_enum_validator(InvoiceSource)]
