from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode26(str, Enum):
    """The language of the input documents. Enter the language code for English (en) or Spanish (es)."""

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


LanguageCode26OrStr: TypeAlias = Annotated[LanguageCode26 | str, open_enum_validator(LanguageCode26)]
