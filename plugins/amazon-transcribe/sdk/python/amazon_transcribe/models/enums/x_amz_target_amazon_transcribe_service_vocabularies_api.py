from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonTranscribeServiceVocabulariesApi(str, Enum):
    TRANSCRIBE_CREATE_VOCABULARY = "Transcribe.CreateVocabulary"

    __str__ = str.__str__


XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonTranscribeServiceVocabulariesApi | str,
    open_enum_validator(XAmzTargetAmazonTranscribeServiceVocabulariesApi),
]
