from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonTranscribeServiceLanguageModelApi(str, Enum):
    TRANSCRIBE_UPDATE_LANGUAGE_MODEL = "Transcribe.UpdateLanguageModel"

    __str__ = str.__str__


XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonTranscribeServiceLanguageModelApi | str,
    open_enum_validator(XAmzTarget4AmazonTranscribeServiceLanguageModelApi),
]
