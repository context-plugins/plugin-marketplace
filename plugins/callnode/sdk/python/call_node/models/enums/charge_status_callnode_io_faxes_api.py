from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChargeStatusCallnodeIoFaxesApi(str, Enum):
    CHARGED = "charged"
    UNPRICED = "unpriced"
    INSUFFICIENT_BALANCE = "insufficient_balance"
    SKIPPED = "skipped"
    TEST = "test"

    __str__ = str.__str__


ChargeStatusCallnodeIoFaxesApiOrStr: TypeAlias = Annotated[
    ChargeStatusCallnodeIoFaxesApi | str, open_enum_validator(ChargeStatusCallnodeIoFaxesApi)
]
