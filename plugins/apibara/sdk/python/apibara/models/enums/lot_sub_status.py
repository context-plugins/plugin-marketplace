from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LotSubStatus(str, Enum):
    LIVE = "Live"
    OPEN = "Open"
    ENDED = "Ended"

    __str__ = str.__str__


LotSubStatusOrStr: TypeAlias = Annotated[LotSubStatus | str, open_enum_validator(LotSubStatus)]
