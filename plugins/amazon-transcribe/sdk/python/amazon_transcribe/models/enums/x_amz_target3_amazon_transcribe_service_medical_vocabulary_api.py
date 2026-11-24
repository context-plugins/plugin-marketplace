from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi(str, Enum):
    TRANSCRIBE_LIST_MEDICAL_VOCABULARIES = "Transcribe.ListMedicalVocabularies"

    __str__ = str.__str__


XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi | str,
    open_enum_validator(XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi),
]
