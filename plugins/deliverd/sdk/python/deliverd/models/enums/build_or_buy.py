from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BuildOrBuy(str, Enum):
    BUILD = "build"
    BUY = "buy"
    HYBRID = "hybrid"

    __str__ = str.__str__


BuildOrBuyOrStr: TypeAlias = Annotated[BuildOrBuy | str, open_enum_validator(BuildOrBuy)]
