from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentMethodUsBankAccountAccountType(str, Enum):
    CHECKING = "checking"
    SAVINGS = "savings"

    __str__ = str.__str__


PaymentMethodUsBankAccountAccountTypeOrStr: TypeAlias = Annotated[
    PaymentMethodUsBankAccountAccountType | str, open_enum_validator(PaymentMethodUsBankAccountAccountType)
]
