from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Truncation(str, Enum):
    AUTO = "auto"
    DISABLED = "disabled"

    __str__ = str.__str__


TruncationOrStr: TypeAlias = Annotated[Truncation | str, open_enum_validator(Truncation)]
