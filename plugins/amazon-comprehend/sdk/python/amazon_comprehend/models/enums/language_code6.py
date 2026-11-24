from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode6(str, Enum):
    """The language of the input documents. You can specify any of the languages supported by Amazon Comprehend. All
    documents must be in the same language."""

    EN = "en"
    ES = "es"
    FR = "fr"
    DE = "de"
    IT = "it"
    PT = "pt"
    AR = "ar"
    HI = "hi"
    JA = "ja"
    KO = "ko"
    ZH = "zh"
    ZH_TW = "zh-TW"

    __str__ = str.__str__


LanguageCode6OrStr: TypeAlias = Annotated[LanguageCode6 | str, open_enum_validator(LanguageCode6)]
