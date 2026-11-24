from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonTranscribeServiceLanguageModelApi(str, Enum):
    TRANSCRIBE_CREATE_LANGUAGE_MODEL = "Transcribe.CreateLanguageModel"

    __str__ = str.__str__


XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonTranscribeServiceLanguageModelApi | str,
    open_enum_validator(XAmzTargetAmazonTranscribeServiceLanguageModelApi),
]
