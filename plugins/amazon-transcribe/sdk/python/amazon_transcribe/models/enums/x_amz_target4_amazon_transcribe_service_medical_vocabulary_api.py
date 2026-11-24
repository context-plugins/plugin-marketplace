from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi(str, Enum):
    TRANSCRIBE_UPDATE_MEDICAL_VOCABULARY = "Transcribe.UpdateMedicalVocabulary"

    __str__ = str.__str__


XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi | str,
    open_enum_validator(XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi),
]
