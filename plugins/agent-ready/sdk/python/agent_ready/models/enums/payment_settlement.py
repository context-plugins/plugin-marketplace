from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentSettlement(str, Enum):
    """Present only when the scan succeeded but on-chain settlement did not. The result is still returned rather than
    failing a paid caller."""

    FAILED = "failed"

    __str__ = str.__str__


PaymentSettlementOrStr: TypeAlias = Annotated[PaymentSettlement | str, open_enum_validator(PaymentSettlement)]
