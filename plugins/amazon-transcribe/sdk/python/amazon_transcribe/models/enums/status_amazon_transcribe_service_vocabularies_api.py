from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonTranscribeServiceVocabulariesApi(str, Enum):
    """Lists all custom vocabularies that have the status specified in your request. Vocabularies are ordered by
    creation date, with the newest vocabulary first."""

    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"

    __str__ = str.__str__


StatusAmazonTranscribeServiceVocabulariesApiOrStr: TypeAlias = Annotated[
    StatusAmazonTranscribeServiceVocabulariesApi | str,
    open_enum_validator(StatusAmazonTranscribeServiceVocabulariesApi),
]
