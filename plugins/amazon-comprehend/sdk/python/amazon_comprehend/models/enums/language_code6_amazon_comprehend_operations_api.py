from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode6AmazonComprehendOperationsApi(str, Enum):
    """The language of the input documents. Currently, English is the only supported language."""

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


LanguageCode6AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    LanguageCode6AmazonComprehendOperationsApi | str, open_enum_validator(LanguageCode6AmazonComprehendOperationsApi)
]
