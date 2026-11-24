from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AudioRecognitionStrategy(str, Enum):
    """Enables using the slot values as a custom vocabulary for recognizing user utterances."""

    USE_SLOT_VALUES_AS_CUSTOM_VOCABULARY = "UseSlotValuesAsCustomVocabulary"

    __str__ = str.__str__


AudioRecognitionStrategyOrStr: TypeAlias = Annotated[
    AudioRecognitionStrategy | str, open_enum_validator(AudioRecognitionStrategy)
]
