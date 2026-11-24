from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonTranscribeServiceVocabularyFilterApi(str, Enum):
    TRANSCRIBE_CREATE_VOCABULARY_FILTER = "Transcribe.CreateVocabularyFilter"

    __str__ = str.__str__


XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonTranscribeServiceVocabularyFilterApi | str,
    open_enum_validator(XAmzTargetAmazonTranscribeServiceVocabularyFilterApi),
]
