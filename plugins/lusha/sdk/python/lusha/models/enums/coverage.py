from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Coverage(str, Enum):
    LAST_FUNDING = "last_funding"
    ANY_ROUND = "any_round"
    TOTAL_FUNDS = "total_funds"
    LAST_ROUND = "last_round"

    __str__ = str.__str__


CoverageOrStr: TypeAlias = Annotated[Coverage | str, open_enum_validator(Coverage)]
