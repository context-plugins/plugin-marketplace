from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Tier(str, Enum):
    PRO = "PRO"
    BUSINESS = "BUSINESS"

    __str__ = str.__str__


TierOrStr: TypeAlias = Annotated[Tier | str, open_enum_validator(Tier)]
