from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SettlementStatus(str, Enum):
    """Settlement status of the transferred funds in the Linked Account."""

    PENDING = "pending"
    ON_HOLD = "on_hold"
    SETTLED = "settled"

    __str__ = str.__str__


SettlementStatusOrStr: TypeAlias = Annotated[SettlementStatus | str, open_enum_validator(SettlementStatus)]
