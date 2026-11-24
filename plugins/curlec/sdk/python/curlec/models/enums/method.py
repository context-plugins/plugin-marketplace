from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Method(str, Enum):
    CARD = "card"
    NETBANKING = "netbanking"
    WALLET = "wallet"
    EMI = "emi"
    UPI = "upi"

    __str__ = str.__str__


MethodOrStr: TypeAlias = Annotated[Method | str, open_enum_validator(Method)]
