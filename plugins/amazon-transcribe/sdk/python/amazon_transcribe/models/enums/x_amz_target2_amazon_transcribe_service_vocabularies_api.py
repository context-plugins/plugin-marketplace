from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonTranscribeServiceVocabulariesApi(str, Enum):
    TRANSCRIBE_GET_VOCABULARY = "Transcribe.GetVocabulary"

    __str__ = str.__str__


XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonTranscribeServiceVocabulariesApi | str,
    open_enum_validator(XAmzTarget2AmazonTranscribeServiceVocabulariesApi),
]
