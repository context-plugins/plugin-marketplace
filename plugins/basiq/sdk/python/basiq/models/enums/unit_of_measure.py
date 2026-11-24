from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UnitOfMeasure(str, Enum):
    """The unit of measure that applies to the minimumValue and maximumValue values e.g. a DOLLAR amount. PERCENT (in
    the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of MONTH's or DAY's (in the
    case of term deposit tiers)."""

    DAY = "DAY"
    DOLLAR = "DOLLAR"
    MONTH = "MONTH"
    PERCENT = "PERCENT"

    __str__ = str.__str__


UnitOfMeasureOrStr: TypeAlias = Annotated[UnitOfMeasure | str, open_enum_validator(UnitOfMeasure)]
