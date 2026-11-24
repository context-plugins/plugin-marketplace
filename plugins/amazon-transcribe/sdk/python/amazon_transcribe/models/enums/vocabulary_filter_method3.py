from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VocabularyFilterMethod3(str, Enum):
    """Provides the vocabulary filtering method used in your transcription."""

    REMOVE = "remove"
    MASK = "mask"
    TAG = "tag"

    __str__ = str.__str__


VocabularyFilterMethod3OrStr: TypeAlias = Annotated[
    VocabularyFilterMethod3 | str, open_enum_validator(VocabularyFilterMethod3)
]
