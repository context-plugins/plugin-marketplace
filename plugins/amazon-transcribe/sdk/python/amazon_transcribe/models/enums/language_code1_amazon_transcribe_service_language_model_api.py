from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode1AmazonTranscribeServiceLanguageModelApi(str, Enum):
    """The language code you selected for your custom language model."""

    EN_US = "en-US"
    HI_IN = "hi-IN"
    ES_US = "es-US"
    EN_GB = "en-GB"
    EN_AU = "en-AU"
    DE_DE = "de-DE"
    JA_JP = "ja-JP"

    __str__ = str.__str__


LanguageCode1AmazonTranscribeServiceLanguageModelApiOrStr: TypeAlias = Annotated[
    LanguageCode1AmazonTranscribeServiceLanguageModelApi | str,
    open_enum_validator(LanguageCode1AmazonTranscribeServiceLanguageModelApi),
]
