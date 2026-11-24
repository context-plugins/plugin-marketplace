from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModelListSort(str, Enum):
    PROVIDER = "provider"
    USAGE = "usage"
    RECENT = "recent"
    NAME = "name"
    PRICE_LOW = "price_low"
    PRICE_HIGH = "price_high"
    SPEED = "speed"

    __str__ = str.__str__


ModelListSortOrStr: TypeAlias = Annotated[ModelListSort | str, open_enum_validator(ModelListSort)]
