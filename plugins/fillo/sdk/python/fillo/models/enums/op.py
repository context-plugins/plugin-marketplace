from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Op(str, Enum):
    EQ = "eq"
    ANSWERED = "answered"
    NOT_ANSWERED = "not_answered"

    __str__ = str.__str__


OpOrStr: TypeAlias = Annotated[Op | str, open_enum_validator(Op)]
