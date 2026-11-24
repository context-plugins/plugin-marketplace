from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Specialty(str, Enum):
    """Describes the medical specialty represented in your media."""

    PRIMARYCARE = "PRIMARYCARE"

    __str__ = str.__str__


SpecialtyOrStr: TypeAlias = Annotated[Specialty | str, open_enum_validator(Specialty)]
