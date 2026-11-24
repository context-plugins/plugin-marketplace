from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LocationType(str, Enum):
    RECIPIENT = "recipient"
    FUNDER = "funder"
    AREA_SERVED = "area_served"

    __str__ = str.__str__


LocationTypeOrStr: TypeAlias = Annotated[LocationType | str, open_enum_validator(LocationType)]
