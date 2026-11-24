from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi(str, Enum):
    TRANSCRIBE_DELETE_MEDICAL_VOCABULARY = "Transcribe.DeleteMedicalVocabulary"

    __str__ = str.__str__


XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi | str,
    open_enum_validator(XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi),
]
