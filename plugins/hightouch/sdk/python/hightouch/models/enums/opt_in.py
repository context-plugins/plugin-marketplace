from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OptIn(str, Enum):
    """Force an opt-in style. Omit to let the topic and channel decide; a value they cannot honor is refused rather than
    silently resolved."""

    SINGLE = "single"
    DOUBLE = "double"

    __str__ = str.__str__


OptInOrStr: TypeAlias = Annotated[OptIn | str, open_enum_validator(OptIn)]
