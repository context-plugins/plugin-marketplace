from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VocabularyState2(str, Enum):
    """The processing state of your custom vocabulary. If the state is READY, you can use the custom vocabulary in a
    StartTranscriptionJob request."""

    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"

    __str__ = str.__str__


VocabularyState2OrStr: TypeAlias = Annotated[VocabularyState2 | str, open_enum_validator(VocabularyState2)]
