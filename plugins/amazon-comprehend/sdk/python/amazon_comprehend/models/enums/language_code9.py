from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode9(str, Enum):
    """The language code for the language of the documents that the classifier was trained on."""

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


LanguageCode9OrStr: TypeAlias = Annotated[LanguageCode9 | str, open_enum_validator(LanguageCode9)]
