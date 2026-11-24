from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PayByType(str, Enum):
    """Enum for PayByType."""

    CHECK = "CHECK"
    ACH = "ACH"
    RPPS = "RPPS"
    OFFLINE = "OFFLINE"
    INTERNATIONAL_E_PAYMENT = "INTERNATIONAL_E_PAYMENT"
    VIRTUAL_CARD = "VIRTUAL_CARD"
    WALLET = "WALLET"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


PayByTypeOrStr: TypeAlias = Annotated[PayByType | str, open_enum_validator(PayByType)]
