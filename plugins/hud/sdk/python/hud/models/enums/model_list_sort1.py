from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModelListSort1(str, Enum):
    """Row order. Signed-out callers cannot sort by ``usage``."""

    PROVIDER = "provider"
    USAGE = "usage"
    RECENT = "recent"
    NAME = "name"
    PRICE_LOW = "price_low"
    PRICE_HIGH = "price_high"
    SPEED = "speed"

    __str__ = str.__str__


ModelListSort1OrStr: TypeAlias = Annotated[ModelListSort1 | str, open_enum_validator(ModelListSort1)]
