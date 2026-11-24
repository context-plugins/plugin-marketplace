from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonTranscribeServiceLanguageModelApi(str, Enum):
    TRANSCRIBE_DESCRIBE_LANGUAGE_MODEL = "Transcribe.DescribeLanguageModel"

    __str__ = str.__str__


XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonTranscribeServiceLanguageModelApi | str,
    open_enum_validator(XAmzTarget2AmazonTranscribeServiceLanguageModelApi),
]
