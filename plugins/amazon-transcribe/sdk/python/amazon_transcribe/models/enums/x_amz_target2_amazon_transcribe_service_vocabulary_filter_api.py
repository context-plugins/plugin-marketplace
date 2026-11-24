from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi(str, Enum):
    TRANSCRIBE_GET_VOCABULARY_FILTER = "Transcribe.GetVocabularyFilter"

    __str__ = str.__str__


XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi | str,
    open_enum_validator(XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi),
]
