from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode2(str, Enum):
    """The language code used to create your custom language model. Each custom language model must contain terms in
    only one language, and the language you select for your custom language model must match the language of your
    training and tuning data. For a list of supported languages and their associated language codes, refer to the
    Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe
    Medical."""

    EN_US = "en-US"
    HI_IN = "hi-IN"
    ES_US = "es-US"
    EN_GB = "en-GB"
    EN_AU = "en-AU"
    DE_DE = "de-DE"
    JA_JP = "ja-JP"

    __str__ = str.__str__


LanguageCode2OrStr: TypeAlias = Annotated[LanguageCode2 | str, open_enum_validator(LanguageCode2)]
