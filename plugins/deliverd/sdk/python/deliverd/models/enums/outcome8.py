from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Outcome8(str, Enum):
    """applied (the default) carries the result into the parent; kept records it as reference only; discarded records
    that it was not used"""

    APPLIED = "applied"
    KEPT = "kept"
    DISCARDED = "discarded"

    __str__ = str.__str__


Outcome8OrStr: TypeAlias = Annotated[Outcome8 | str, open_enum_validator(Outcome8)]
