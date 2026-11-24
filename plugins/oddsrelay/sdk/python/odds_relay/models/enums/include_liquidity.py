from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncludeLiquidity(str, Enum):
    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


IncludeLiquidityOrStr: TypeAlias = Annotated[IncludeLiquidity | str, open_enum_validator(IncludeLiquidity)]
