from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Market(str, Enum):
    ALL = "all"
    US_EQUITY = "us_equity"
    CRYPTO = "crypto"
    INTERNATIONAL = "international"

    __str__ = str.__str__


MarketOrStr: TypeAlias = Annotated[Market | str, open_enum_validator(Market)]
