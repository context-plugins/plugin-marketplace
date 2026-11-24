from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Outcome(str, Enum):
    OK = "ok"
    NO_TRANSCRIPT = "no_transcript"
    PROCESSING = "processing"
    ERROR = "error"

    __str__ = str.__str__


OutcomeOrStr: TypeAlias = Annotated[Outcome | str, open_enum_validator(Outcome)]
