from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpeechDetectionSensitivity4(str, Enum):
    """The updated sensitivity level for voice activity detection (VAD) in the bot locale."""

    DEFAULT = "Default"
    HIGH_NOISE_TOLERANCE = "HighNoiseTolerance"
    MAXIMUM_NOISE_TOLERANCE = "MaximumNoiseTolerance"

    __str__ = str.__str__


SpeechDetectionSensitivity4OrStr: TypeAlias = Annotated[
    SpeechDetectionSensitivity4 | str, open_enum_validator(SpeechDetectionSensitivity4)
]
