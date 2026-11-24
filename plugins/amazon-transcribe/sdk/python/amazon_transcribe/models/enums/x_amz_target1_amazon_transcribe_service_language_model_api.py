from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonTranscribeServiceLanguageModelApi(str, Enum):
    TRANSCRIBE_DELETE_LANGUAGE_MODEL = "Transcribe.DeleteLanguageModel"

    __str__ = str.__str__


XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonTranscribeServiceLanguageModelApi | str,
    open_enum_validator(XAmzTarget1AmazonTranscribeServiceLanguageModelApi),
]
