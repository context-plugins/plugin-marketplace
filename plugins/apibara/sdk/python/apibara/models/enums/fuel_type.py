from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FuelType(str, Enum):
    DIESEL = "Diesel"
    HYBRID = "Hybrid"
    ELECTRIC = "Electric"
    FLEXIBLE = "Flexible"
    GASOLINE = "Gasoline"
    ALL_OTHERS = "All others"

    __str__ = str.__str__


FuelTypeOrStr: TypeAlias = Annotated[FuelType | str, open_enum_validator(FuelType)]
