from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InputMode(str, Enum):
    """Indicates whether the input to the operation was text, speech, or from a touch-tone keypad."""

    TEXT = "Text"
    SPEECH = "Speech"
    DTMF = "DTMF"

    __str__ = str.__str__


InputModeOrStr: TypeAlias = Annotated[InputMode | str, open_enum_validator(InputMode)]
