from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode7(str, Enum):
    """You can specify any of the following languages: English ("en"), Spanish ("es"), French ("fr"), Italian ("it"),
    German ("de"), or Portuguese ("pt"). If you plan to use this entity recognizer with PDF, Word, or image input files,
    you must specify English as the language. All training documents must be in the same language."""

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


LanguageCode7OrStr: TypeAlias = Annotated[LanguageCode7 | str, open_enum_validator(LanguageCode7)]
