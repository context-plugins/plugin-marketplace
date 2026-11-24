from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PriceSource(str, Enum):
    EBAY_DISCOUNTED = "ebay_discounted"
    RETAIL = "retail"

    __str__ = str.__str__


PriceSourceOrStr: TypeAlias = Annotated[PriceSource | str, open_enum_validator(PriceSource)]
