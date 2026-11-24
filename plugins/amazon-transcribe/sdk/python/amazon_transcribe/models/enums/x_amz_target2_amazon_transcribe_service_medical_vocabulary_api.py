from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi(str, Enum):
    TRANSCRIBE_GET_MEDICAL_VOCABULARY = "Transcribe.GetMedicalVocabulary"

    __str__ = str.__str__


XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi | str,
    open_enum_validator(XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi),
]
