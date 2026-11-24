from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi(str, Enum):
    TRANSCRIBE_DELETE_VOCABULARY_FILTER = "Transcribe.DeleteVocabularyFilter"

    __str__ = str.__str__


XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi | str,
    open_enum_validator(XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi),
]
