from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChargeStatus(str, Enum):
    CHARGED = "charged"
    SKIPPED = "skipped"
    INSUFFICIENT_BALANCE = "insufficient_balance"
    TEST = "test"
    ERROR = "error"

    __str__ = str.__str__


ChargeStatusOrStr: TypeAlias = Annotated[ChargeStatus | str, open_enum_validator(ChargeStatus)]
