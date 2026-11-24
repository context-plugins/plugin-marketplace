from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingInterval(str, Enum):
    MONTHLY = "MONTHLY"
    YEARLY = "YEARLY"

    __str__ = str.__str__


BillingIntervalOrStr: TypeAlias = Annotated[BillingInterval | str, open_enum_validator(BillingInterval)]
