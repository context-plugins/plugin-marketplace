from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Animations(str, Enum):
    DISABLED = "disabled"
    ALLOW = "allow"

    __str__ = str.__str__


AnimationsOrStr: TypeAlias = Annotated[Animations | str, open_enum_validator(Animations)]
