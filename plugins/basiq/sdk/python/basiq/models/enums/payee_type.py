from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PayeeType(str, Enum):
    """The type of payee."""

    DOMESTIC = "domestic"
    BILLER = "biller"
    INTERNATIONAL = "international"
    DIGITAL_WALLET = "digitalWallet"

    __str__ = str.__str__


PayeeTypeOrStr: TypeAlias = Annotated[PayeeType | str, open_enum_validator(PayeeType)]
