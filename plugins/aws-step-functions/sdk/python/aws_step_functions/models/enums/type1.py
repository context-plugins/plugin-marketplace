from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """Determines whether a Standard or Express state machine is created. The default is STANDARD. You cannot update the
    type of a state machine once it has been created."""

    STANDARD = "STANDARD"
    EXPRESS = "EXPRESS"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
