from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi(str, Enum):
    TRANSCRIBE_UPDATE_VOCABULARY_FILTER = "Transcribe.UpdateVocabularyFilter"

    __str__ = str.__str__


XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi | str,
    open_enum_validator(XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi),
]
