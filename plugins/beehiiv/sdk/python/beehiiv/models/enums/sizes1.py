from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sizes1(str, Enum):
    """The size of the button (e.g., small, normal, large)."""

    SMALL = "small"
    NORMAL = "normal"
    LARGE = "large"

    __str__ = str.__str__


Sizes1OrStr: TypeAlias = Annotated[Sizes1 | str, open_enum_validator(Sizes1)]
