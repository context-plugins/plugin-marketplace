from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VocabularyFilterMethod2(str, Enum):
    """Provides the vocabulary filtering method used in your Call Analytics transcription."""

    REMOVE = "remove"
    MASK = "mask"
    TAG = "tag"

    __str__ = str.__str__


VocabularyFilterMethod2OrStr: TypeAlias = Annotated[
    VocabularyFilterMethod2 | str, open_enum_validator(VocabularyFilterMethod2)
]
