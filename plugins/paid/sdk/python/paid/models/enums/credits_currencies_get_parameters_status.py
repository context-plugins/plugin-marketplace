from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreditsCurrenciesGetParametersStatus(str, Enum):
    ACTIVE = "active"
    ARCHIVED = "archived"
    ALL = "all"

    __str__ = str.__str__


CreditsCurrenciesGetParametersStatusOrStr: TypeAlias = Annotated[
    CreditsCurrenciesGetParametersStatus | str, open_enum_validator(CreditsCurrenciesGetParametersStatus)
]
