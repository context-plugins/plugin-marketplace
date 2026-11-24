from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode11(str, Enum):
    """The language of the input documents. All documents must be in the same language. Only English ("en") is currently
    supported."""

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


LanguageCode11OrStr: TypeAlias = Annotated[LanguageCode11 | str, open_enum_validator(LanguageCode11)]
