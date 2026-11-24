from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Locale(str, Enum):
    """A locale that specifies the language to use for recommendations."""

    DE_DE = "DE_DE"
    EN_US = "EN_US"
    EN_GB = "EN_GB"
    ES_ES = "ES_ES"
    FR_FR = "FR_FR"
    IT_IT = "IT_IT"
    JA_JP = "JA_JP"
    KO_KR = "KO_KR"
    PT_BR = "PT_BR"
    ZH_CN = "ZH_CN"
    ZH_TW = "ZH_TW"

    __str__ = str.__str__


LocaleOrStr: TypeAlias = Annotated[Locale | str, open_enum_validator(Locale)]
