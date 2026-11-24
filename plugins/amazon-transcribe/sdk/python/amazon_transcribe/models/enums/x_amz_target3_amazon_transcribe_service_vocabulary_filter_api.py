from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi(str, Enum):
    TRANSCRIBE_LIST_VOCABULARY_FILTERS = "Transcribe.ListVocabularyFilters"

    __str__ = str.__str__


XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi | str,
    open_enum_validator(XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi),
]
