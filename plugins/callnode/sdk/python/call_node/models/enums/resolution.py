from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Resolution(str, Enum):
    """fine = 204×196, standard = 204×98."""

    FINE = "fine"
    STANDARD = "standard"

    __str__ = str.__str__


ResolutionOrStr: TypeAlias = Annotated[Resolution | str, open_enum_validator(Resolution)]
