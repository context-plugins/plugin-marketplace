from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Persona(str, Enum):
    DECISION_MAKER = "decision_maker"
    POTENTIAL_CHAMPION = "potential_champion"
    END_USER = "end_user"

    __str__ = str.__str__


PersonaOrStr: TypeAlias = Annotated[Persona | str, open_enum_validator(Persona)]
