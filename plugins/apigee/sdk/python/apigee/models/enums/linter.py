from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Linter(str, Enum):
    """Required. Name of the linter used."""

    LINTER_UNSPECIFIED = "LINTER_UNSPECIFIED"
    SPECTRAL = "SPECTRAL"
    OTHER = "OTHER"

    __str__ = str.__str__


LinterOrStr: TypeAlias = Annotated[Linter | str, open_enum_validator(Linter)]
