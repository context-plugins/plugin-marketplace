from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonTranscribeServiceLanguageModelApi(str, Enum):
    TRANSCRIBE_LIST_LANGUAGE_MODELS = "Transcribe.ListLanguageModels"

    __str__ = str.__str__


XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonTranscribeServiceLanguageModelApi | str,
    open_enum_validator(XAmzTarget3AmazonTranscribeServiceLanguageModelApi),
]
