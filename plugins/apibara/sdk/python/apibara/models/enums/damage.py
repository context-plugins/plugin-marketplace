from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Damage(str, Enum):
    FIRE = "Fire"
    HAIL = "Hail"
    THEFT = "Theft"
    WATER = "Water"
    CHEMICAL = "Chemical"
    ROLLOVER = "Rollover"
    MECHANICAL = "Mechanical"
    VANDALIZED = "Vandalized"
    REPOSSESSION = "Repossession"

    __str__ = str.__str__


DamageOrStr: TypeAlias = Annotated[Damage | str, open_enum_validator(Damage)]
