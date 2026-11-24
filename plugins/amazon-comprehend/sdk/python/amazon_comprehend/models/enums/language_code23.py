from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode23(str, Enum):
    """The language of the input documents. All documents must be in the same language. You can specify any of the
    languages supported by Amazon Comprehend. If custom entities recognition is used, this parameter is ignored and the
    language used for training the model is used instead."""

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


LanguageCode23OrStr: TypeAlias = Annotated[LanguageCode23 | str, open_enum_validator(LanguageCode23)]
