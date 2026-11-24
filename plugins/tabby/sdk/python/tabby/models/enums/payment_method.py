from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentMethod(str, Enum):
    """Payment method used."""

    CARD = "card"
    COD = "cod"

    __str__ = str.__str__


PaymentMethodOrStr: TypeAlias = Annotated[PaymentMethod | str, open_enum_validator(PaymentMethod)]
