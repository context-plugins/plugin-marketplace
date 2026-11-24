from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VocabularyStateAmazonTranscribeServiceVocabulariesApi(str, Enum):
    """The processing state of your custom vocabulary. If the state is READY, you can use the custom vocabulary in a
    StartTranscriptionJob request."""

    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"

    __str__ = str.__str__


VocabularyStateAmazonTranscribeServiceVocabulariesApiOrStr: TypeAlias = Annotated[
    VocabularyStateAmazonTranscribeServiceVocabulariesApi | str,
    open_enum_validator(VocabularyStateAmazonTranscribeServiceVocabulariesApi),
]
