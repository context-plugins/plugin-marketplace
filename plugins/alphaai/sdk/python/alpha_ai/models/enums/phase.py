from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Phase(str, Enum):
    UPCOMING = "upcoming"
    ELAPSED = "elapsed"

    __str__ = str.__str__


PhaseOrStr: TypeAlias = Annotated[Phase | str, open_enum_validator(Phase)]
