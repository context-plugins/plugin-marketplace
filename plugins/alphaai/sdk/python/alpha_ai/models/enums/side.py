from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Side(str, Enum):
    """Signal label from the transaction code: ``buy`` (P, open-market purchase), ``sell`` (S, open-market sale),
    ``other`` for everything else — including D (sale to the issuer: a buyback/redemption, not an open-market
    disposition). Use ``transaction_code`` for your own mapping."""

    BUY = "buy"
    SELL = "sell"
    OTHER = "other"

    __str__ = str.__str__


SideOrStr: TypeAlias = Annotated[Side | str, open_enum_validator(Side)]
