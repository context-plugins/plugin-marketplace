from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode3AmazonComprehendOperationsApi(str, Enum):
    """The language of the input text. Enter the language code for English (en) or Spanish (es)."""

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


LanguageCode3AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    LanguageCode3AmazonComprehendOperationsApi | str, open_enum_validator(LanguageCode3AmazonComprehendOperationsApi)
]
