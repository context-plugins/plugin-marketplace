from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PendingBillingInterval(str, Enum):
    MONTHLY = "MONTHLY"
    YEARLY = "YEARLY"

    __str__ = str.__str__


PendingBillingIntervalOrStr: TypeAlias = Annotated[
    PendingBillingInterval | str, open_enum_validator(PendingBillingInterval)
]
