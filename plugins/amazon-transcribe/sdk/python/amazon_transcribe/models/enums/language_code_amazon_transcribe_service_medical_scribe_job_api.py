from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi(str, Enum):
    """The language code used to create your Medical Scribe job. US English (en-US) is the only supported language for
    Medical Scribe jobs."""

    EN_US = "en-US"

    __str__ = str.__str__


LanguageCodeAmazonTranscribeServiceMedicalScribeJobApiOrStr: TypeAlias = Annotated[
    LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi | str,
    open_enum_validator(LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi),
]
