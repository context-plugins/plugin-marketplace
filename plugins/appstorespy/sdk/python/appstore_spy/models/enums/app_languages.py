from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AppLanguages(str, Enum):
    """An enumeration."""

    EN_US = "en_US"
    AR = "ar"
    EN_GB = "en_GB"
    FR_FR = "fr_FR"
    ES_419 = "es_419"
    DE_DE = "de_DE"
    PT_BR = "pt_BR"
    IT_IT = "it_IT"
    JA_JP = "ja_JP"
    KO_KR = "ko_KR"
    TR_TR = "tr_TR"
    RU_RU = "ru_RU"
    VI = "vi"

    __str__ = str.__str__


AppLanguagesOrStr: TypeAlias = Annotated[AppLanguages | str, open_enum_validator(AppLanguages)]
