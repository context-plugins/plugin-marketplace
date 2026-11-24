from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AudioType(str, Enum):
    """The identifier of the audio filler to play while Amazon Lex processes the user's input. This field is required
    when enabled is true."""

    MELODY_CHIPPER_CHIME = "MELODY_CHIPPER_CHIME"
    MELODY_CURIOUS_CRAWL = "MELODY_CURIOUS_CRAWL"
    MELODY_RISING_RIPPLE = "MELODY_RISING_RIPPLE"
    MELODY_PATIENT_PING = "MELODY_PATIENT_PING"
    MELODY_PONDERING_PONG = "MELODY_PONDERING_PONG"
    TYPING_KINETIC_KEYS = "TYPING_KINETIC_KEYS"
    TYPING_QUIET_QWERTY = "TYPING_QUIET_QWERTY"

    __str__ = str.__str__


AudioTypeOrStr: TypeAlias = Annotated[AudioType | str, open_enum_validator(AudioType)]
