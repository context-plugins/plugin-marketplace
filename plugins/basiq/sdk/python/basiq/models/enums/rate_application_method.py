from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RateApplicationMethod(str, Enum):
    """The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to
    the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier
    (referred to as 'bands' or 'steps')."""

    PER_TIER = "PER_TIER"
    WHOLE_BALANCE = "WHOLE_BALANCE"

    __str__ = str.__str__


RateApplicationMethodOrStr: TypeAlias = Annotated[
    RateApplicationMethod | str, open_enum_validator(RateApplicationMethod)
]
