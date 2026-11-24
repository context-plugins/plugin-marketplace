from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Recommendation1(str, Enum):
    ENGAGE = "engage"
    VERIFY_FIRST = "verify_first"
    DO_NOT_ENGAGE = "do_not_engage"

    __str__ = str.__str__


Recommendation1OrStr: TypeAlias = Annotated[Recommendation1 | str, open_enum_validator(Recommendation1)]
