from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Locale2(str, Enum):
    """Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the
    bot. The default is en-US."""

    DE_DE = "de-DE"
    EN_AU = "en-AU"
    EN_GB = "en-GB"
    EN_IN = "en-IN"
    EN_US = "en-US"
    ES_419 = "es-419"
    ES_ES = "es-ES"
    ES_US = "es-US"
    FR_FR = "fr-FR"
    FR_CA = "fr-CA"
    IT_IT = "it-IT"
    JA_JP = "ja-JP"
    KO_KR = "ko-KR"

    __str__ = str.__str__


Locale2OrStr: TypeAlias = Annotated[Locale2 | str, open_enum_validator(Locale2)]
