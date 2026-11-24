from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SigningOrderType1(str, Enum):
    PARALLEL = "parallel"
    SEQUENTIAL = "sequential"

    __str__ = str.__str__


SigningOrderType1OrStr: TypeAlias = Annotated[SigningOrderType1 | str, open_enum_validator(SigningOrderType1)]
