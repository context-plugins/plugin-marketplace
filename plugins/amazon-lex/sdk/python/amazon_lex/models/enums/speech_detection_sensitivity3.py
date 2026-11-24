from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpeechDetectionSensitivity3(str, Enum):
    """The new sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps optimize
    speech recognition accuracy by adjusting how the system responds to background noise during voice interactions."""

    DEFAULT = "Default"
    HIGH_NOISE_TOLERANCE = "HighNoiseTolerance"
    MAXIMUM_NOISE_TOLERANCE = "MaximumNoiseTolerance"

    __str__ = str.__str__


SpeechDetectionSensitivity3OrStr: TypeAlias = Annotated[
    SpeechDetectionSensitivity3 | str, open_enum_validator(SpeechDetectionSensitivity3)
]
