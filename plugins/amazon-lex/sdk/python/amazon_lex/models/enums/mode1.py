from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode1(str, Enum):
    """The mode of the session. The possible values are as follows: Speech – The session consisted of spoken dialogue.
    Text – The session consisted of written dialogue. DTMF – The session consisted of touch-tone keypad (Dual Tone
    Multi-Frequency) key presses. MultiMode – The session consisted of multiple modes."""

    SPEECH = "Speech"
    TEXT = "Text"
    DTMF = "DTMF"
    MULTI_MODE = "MultiMode"

    __str__ = str.__str__


Mode1OrStr: TypeAlias = Annotated[Mode1 | str, open_enum_validator(Mode1)]
