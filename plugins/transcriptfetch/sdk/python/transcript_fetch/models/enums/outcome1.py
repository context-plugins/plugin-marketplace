from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Outcome1(str, Enum):
    OK = "ok"
    PROCESSING = "processing"
    ERROR = "error"

    __str__ = str.__str__


Outcome1OrStr: TypeAlias = Annotated[Outcome1 | str, open_enum_validator(Outcome1)]
