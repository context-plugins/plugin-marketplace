from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity2(str, Enum):
    SETTLEMENT_ONDEMAND_PAYOUT = "settlement.ondemand_payout"

    __str__ = str.__str__


Entity2OrStr: TypeAlias = Annotated[Entity2 | str, open_enum_validator(Entity2)]
