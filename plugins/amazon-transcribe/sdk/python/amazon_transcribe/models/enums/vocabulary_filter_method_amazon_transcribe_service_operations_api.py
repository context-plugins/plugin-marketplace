from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VocabularyFilterMethodAmazonTranscribeServiceOperationsApi(str, Enum):
    """The method of the vocabulary filter for the HealthScribe streaming session."""

    REMOVE = "remove"
    MASK = "mask"
    TAG = "tag"

    __str__ = str.__str__


VocabularyFilterMethodAmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    VocabularyFilterMethodAmazonTranscribeServiceOperationsApi | str,
    open_enum_validator(VocabularyFilterMethodAmazonTranscribeServiceOperationsApi),
]
