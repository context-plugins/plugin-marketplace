from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LotStatus(str, Enum):
    ALL = "All"
    TIMED = "Timed"
    BUY_NOW = "Buy Now"

    __str__ = str.__str__


LotStatusOrStr: TypeAlias = Annotated[LotStatus | str, open_enum_validator(LotStatus)]
