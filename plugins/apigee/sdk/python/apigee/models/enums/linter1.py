from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Linter1(str, Enum):
    """Required. Target linter for the style guide."""

    LINTER_UNSPECIFIED = "LINTER_UNSPECIFIED"
    SPECTRAL = "SPECTRAL"
    OTHER = "OTHER"

    __str__ = str.__str__


Linter1OrStr: TypeAlias = Annotated[Linter1 | str, open_enum_validator(Linter1)]
