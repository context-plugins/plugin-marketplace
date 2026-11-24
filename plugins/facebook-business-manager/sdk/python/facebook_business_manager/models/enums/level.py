from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Level(str, Enum):
    ACCOUNT = "account"
    CAMPAIGN = "campaign"
    ADSET = "adset"
    AD = "ad"

    __str__ = str.__str__


LevelOrStr: TypeAlias = Annotated[Level | str, open_enum_validator(Level)]
