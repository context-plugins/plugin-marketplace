from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderBillingFrequencyOverrideFrequency(str, Enum):
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
    SEMI_ANNUALLY = "semiAnnually"
    ANNUAL = "annual"
    CUSTOM = "custom"

    __str__ = str.__str__


OrderBillingFrequencyOverrideFrequencyOrStr: TypeAlias = Annotated[
    OrderBillingFrequencyOverrideFrequency | str, open_enum_validator(OrderBillingFrequencyOverrideFrequency)
]
