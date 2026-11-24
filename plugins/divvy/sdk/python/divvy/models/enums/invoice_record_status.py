from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoiceRecordStatus(str, Enum):
    """Record status enum for invoices."""

    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DRAFT = "DRAFT"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


InvoiceRecordStatusOrStr: TypeAlias = Annotated[InvoiceRecordStatus | str, open_enum_validator(InvoiceRecordStatus)]
