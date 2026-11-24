from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VocabularyFilterMethod(str, Enum):
    """Specify how you want your custom vocabulary filter applied to your transcript. To replace words with ***, choose
    mask. To delete words, choose remove. To flag words without changing them, choose tag."""

    REMOVE = "remove"
    MASK = "mask"
    TAG = "tag"

    __str__ = str.__str__


VocabularyFilterMethodOrStr: TypeAlias = Annotated[
    VocabularyFilterMethod | str, open_enum_validator(VocabularyFilterMethod)
]
