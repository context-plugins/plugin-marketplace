from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Specialty1(str, Enum):
    """Provides the medical specialty represented in your media."""

    PRIMARYCARE = "PRIMARYCARE"

    __str__ = str.__str__


Specialty1OrStr: TypeAlias = Annotated[Specialty1 | str, open_enum_validator(Specialty1)]
