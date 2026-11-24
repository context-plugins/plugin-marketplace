from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReceiptType(str, Enum):
    TAX_INVOICE = "tax_invoice"
    SALES_INVOICE = "sales_invoice"
    BILL_OF_SUPPLY = "bill_of_supply"
    CREDIT_NOTE = "credit_note"
    DEBIT_NOTE = "debit_note"

    __str__ = str.__str__


ReceiptTypeOrStr: TypeAlias = Annotated[ReceiptType | str, open_enum_validator(ReceiptType)]
