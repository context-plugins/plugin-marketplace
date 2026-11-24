from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PendingTier(str, Enum):
    PRO = "PRO"
    BUSINESS = "BUSINESS"

    __str__ = str.__str__


PendingTierOrStr: TypeAlias = Annotated[PendingTier | str, open_enum_validator(PendingTier)]
