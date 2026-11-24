from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SalesHistory(str, Enum):
    FULL = "full"
    LIMITED = "limited"

    __str__ = str.__str__


SalesHistoryOrStr: TypeAlias = Annotated[SalesHistory | str, open_enum_validator(SalesHistory)]
