from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpeechDetectionSensitivity2(str, Enum):
    """The sensitivity level for voice activity detection (VAD) configured for the bot locale."""

    DEFAULT = "Default"
    HIGH_NOISE_TOLERANCE = "HighNoiseTolerance"
    MAXIMUM_NOISE_TOLERANCE = "MaximumNoiseTolerance"

    __str__ = str.__str__


SpeechDetectionSensitivity2OrStr: TypeAlias = Annotated[
    SpeechDetectionSensitivity2 | str, open_enum_validator(SpeechDetectionSensitivity2)
]
