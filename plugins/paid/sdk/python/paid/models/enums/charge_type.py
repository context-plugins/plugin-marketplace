from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChargeType(str, Enum):
    ONE_TIME = "oneTime"
    RECURRING = "recurring"
    USAGE = "usage"
    SEAT_BASED = "seatBased"

    __str__ = str.__str__


ChargeTypeOrStr: TypeAlias = Annotated[ChargeType | str, open_enum_validator(ChargeType)]
