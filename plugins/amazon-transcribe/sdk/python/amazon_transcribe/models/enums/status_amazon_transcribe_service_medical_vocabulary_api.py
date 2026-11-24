from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonTranscribeServiceMedicalVocabularyApi(str, Enum):
    """Lists all custom medical vocabularies that have the status specified in your request. Custom vocabularies are
    ordered by creation date, with the newest vocabulary first."""

    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"

    __str__ = str.__str__


StatusAmazonTranscribeServiceMedicalVocabularyApiOrStr: TypeAlias = Annotated[
    StatusAmazonTranscribeServiceMedicalVocabularyApi | str,
    open_enum_validator(StatusAmazonTranscribeServiceMedicalVocabularyApi),
]
