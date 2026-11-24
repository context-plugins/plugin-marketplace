from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Phase(str, Enum):
    COMMENTARY = "commentary"
    FINAL_ANSWER = "final_answer"

    __str__ = str.__str__


PhaseOrStr: TypeAlias = Annotated[Phase | str, open_enum_validator(Phase)]
