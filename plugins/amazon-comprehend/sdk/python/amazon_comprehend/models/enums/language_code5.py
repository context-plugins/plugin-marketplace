from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode5(str, Enum):
    """The language of the input documents."""

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


LanguageCode5OrStr: TypeAlias = Annotated[LanguageCode5 | str, open_enum_validator(LanguageCode5)]
