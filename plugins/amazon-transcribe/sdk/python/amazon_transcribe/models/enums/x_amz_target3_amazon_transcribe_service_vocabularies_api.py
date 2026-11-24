from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonTranscribeServiceVocabulariesApi(str, Enum):
    TRANSCRIBE_LIST_VOCABULARIES = "Transcribe.ListVocabularies"

    __str__ = str.__str__


XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonTranscribeServiceVocabulariesApi | str,
    open_enum_validator(XAmzTarget3AmazonTranscribeServiceVocabulariesApi),
]
