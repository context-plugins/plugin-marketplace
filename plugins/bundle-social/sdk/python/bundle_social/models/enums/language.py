from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Language(str, Enum):
    EN = "en"
    PL = "pl"
    FR = "fr"
    HI = "hi"
    SV = "sv"
    DE = "de"
    ES = "es"
    IT = "it"
    NL = "nl"
    PT = "pt"
    RU = "ru"
    TR = "tr"
    ZH = "zh"
    DA = "da"
    TH = "th"
    KO = "ko"
    HE = "he"
    AR = "ar"

    __str__ = str.__str__


LanguageOrStr: TypeAlias = Annotated[Language | str, open_enum_validator(Language)]
