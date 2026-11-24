from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verdict1(str, Enum):
    APPROVE = "approve"
    REJECT = "reject"

    __str__ = str.__str__


Verdict1OrStr: TypeAlias = Annotated[Verdict1 | str, open_enum_validator(Verdict1)]
