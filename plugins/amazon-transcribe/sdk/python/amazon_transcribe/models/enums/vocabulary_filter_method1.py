from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VocabularyFilterMethod1(str, Enum):
    """Specify how you want your custom vocabulary filter applied to the streaming session. To replace words with ***,
    specify mask. To delete words, specify remove. To flag words without changing them, specify tag."""

    REMOVE = "remove"
    MASK = "mask"
    TAG = "tag"

    __str__ = str.__str__


VocabularyFilterMethod1OrStr: TypeAlias = Annotated[
    VocabularyFilterMethod1 | str, open_enum_validator(VocabularyFilterMethod1)
]
