from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode17(str, Enum):
    """The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend.
    If your request includes the endpoint for a custom entity recognition model, Amazon Comprehend uses the language of
    your custom model, and it ignores any language code that you specify here. All input documents must be in the same
    language."""

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


LanguageCode17OrStr: TypeAlias = Annotated[LanguageCode17 | str, open_enum_validator(LanguageCode17)]
