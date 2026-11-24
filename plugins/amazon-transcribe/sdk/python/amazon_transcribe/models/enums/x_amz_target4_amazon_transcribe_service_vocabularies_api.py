from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonTranscribeServiceVocabulariesApi(str, Enum):
    TRANSCRIBE_UPDATE_VOCABULARY = "Transcribe.UpdateVocabulary"

    __str__ = str.__str__


XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonTranscribeServiceVocabulariesApi | str,
    open_enum_validator(XAmzTarget4AmazonTranscribeServiceVocabulariesApi),
]
