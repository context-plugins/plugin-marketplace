from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonTranscribeServiceVocabulariesApi(str, Enum):
    TRANSCRIBE_DELETE_VOCABULARY = "Transcribe.DeleteVocabulary"

    __str__ = str.__str__


XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonTranscribeServiceVocabulariesApi | str,
    open_enum_validator(XAmzTarget1AmazonTranscribeServiceVocabulariesApi),
]
