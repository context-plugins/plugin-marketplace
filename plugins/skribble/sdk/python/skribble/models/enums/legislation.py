from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Legislation(str, Enum):
    WORLD = "WORLD"
    CH = "CH"
    EU = "EU"
    CH_EU = "CH_EU"

    __str__ = str.__str__


LegislationOrStr: TypeAlias = Annotated[Legislation | str, open_enum_validator(Legislation)]
