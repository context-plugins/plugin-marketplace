from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReceiptDelivery(str, Enum):
    DIGITAL = "digital"
    PRINT = "print"
    DIGITAL_AND_PRINT = "digital_and_print"

    __str__ = str.__str__


ReceiptDeliveryOrStr: TypeAlias = Annotated[ReceiptDelivery | str, open_enum_validator(ReceiptDelivery)]
