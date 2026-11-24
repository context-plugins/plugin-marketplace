from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VocabularyState(str, Enum):
    """The processing state of your custom medical vocabulary. If the state is READY, you can use the custom vocabulary
    in a StartMedicalTranscriptionJob request."""

    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"

    __str__ = str.__str__


VocabularyStateOrStr: TypeAlias = Annotated[VocabularyState | str, open_enum_validator(VocabularyState)]
