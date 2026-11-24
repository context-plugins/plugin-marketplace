from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sizes(str, Enum):
    """The sizes of the button."""

    SMALL = "small"
    NORMAL = "normal"
    LARGE = "large"

    __str__ = str.__str__


SizesOrStr: TypeAlias = Annotated[Sizes | str, open_enum_validator(Sizes)]
