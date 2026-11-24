from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi(str, Enum):
    TRANSCRIBE_CREATE_MEDICAL_VOCABULARY = "Transcribe.CreateMedicalVocabulary"

    __str__ = str.__str__


XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi | str,
    open_enum_validator(XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi),
]
