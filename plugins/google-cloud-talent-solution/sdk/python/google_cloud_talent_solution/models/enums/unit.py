from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Unit(str, Enum):
    """Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED."""

    COMPENSATION_UNIT_UNSPECIFIED = "COMPENSATION_UNIT_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    YEARLY = "YEARLY"
    ONE_TIME = "ONE_TIME"
    OTHER_COMPENSATION_UNIT = "OTHER_COMPENSATION_UNIT"

    __str__ = str.__str__


UnitOrStr: TypeAlias = Annotated[Unit | str, open_enum_validator(Unit)]
