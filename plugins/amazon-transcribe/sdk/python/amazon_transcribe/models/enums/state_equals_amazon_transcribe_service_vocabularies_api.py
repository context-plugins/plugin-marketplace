from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateEqualsAmazonTranscribeServiceVocabulariesApi(str, Enum):
    """Returns only custom vocabularies with the specified state. Vocabularies are ordered by creation date, with the
    newest vocabulary first. If you do not include StateEquals, all custom medical vocabularies are returned."""

    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"

    __str__ = str.__str__


StateEqualsAmazonTranscribeServiceVocabulariesApiOrStr: TypeAlias = Annotated[
    StateEqualsAmazonTranscribeServiceVocabulariesApi | str,
    open_enum_validator(StateEqualsAmazonTranscribeServiceVocabulariesApi),
]
