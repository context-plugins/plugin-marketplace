from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingFrequency(str, Enum):
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
    ANNUAL = "annual"

    __str__ = str.__str__


BillingFrequencyOrStr: TypeAlias = Annotated[BillingFrequency | str, open_enum_validator(BillingFrequency)]
