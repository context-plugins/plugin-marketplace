from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MicrophoneDistance(str, Enum):
    """The audio type that most closely describes the audio being recognized."""

    MICROPHONE_DISTANCE_UNSPECIFIED = "MICROPHONE_DISTANCE_UNSPECIFIED"
    NEARFIELD = "NEARFIELD"
    MIDFIELD = "MIDFIELD"
    FARFIELD = "FARFIELD"

    __str__ = str.__str__


MicrophoneDistanceOrStr: TypeAlias = Annotated[MicrophoneDistance | str, open_enum_validator(MicrophoneDistance)]
