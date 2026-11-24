from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCodeAmazonTranscribeServiceLanguageModelApi(str, Enum):
    """The language code that represents the language of your model. Each custom language model must contain terms in
    only one language, and the language you select for your custom language model must match the language of your
    training and tuning data. For a list of supported languages and their associated language codes, refer to the
    Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe
    Medical. A custom language model can only be used to transcribe files in the same language as the model. For
    example, if you create a custom language model usi"""

    EN_US = "en-US"
    HI_IN = "hi-IN"
    ES_US = "es-US"
    EN_GB = "en-GB"
    EN_AU = "en-AU"
    DE_DE = "de-DE"
    JA_JP = "ja-JP"

    __str__ = str.__str__


LanguageCodeAmazonTranscribeServiceLanguageModelApiOrStr: TypeAlias = Annotated[
    LanguageCodeAmazonTranscribeServiceLanguageModelApi | str,
    open_enum_validator(LanguageCodeAmazonTranscribeServiceLanguageModelApi),
]
