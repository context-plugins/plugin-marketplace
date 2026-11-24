from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribeVocabularyFilterMethod(str, Enum):
    REMOVE = "remove"
    MASK = "mask"
    TAG = "tag"

    __str__ = str.__str__


XAmznTranscribeVocabularyFilterMethodOrStr: TypeAlias = Annotated[
    XAmznTranscribeVocabularyFilterMethod | str, open_enum_validator(XAmznTranscribeVocabularyFilterMethod)
]
