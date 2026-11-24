from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExchangesOnly(str, Enum):
    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


ExchangesOnlyOrStr: TypeAlias = Annotated[ExchangesOnly | str, open_enum_validator(ExchangesOnly)]
