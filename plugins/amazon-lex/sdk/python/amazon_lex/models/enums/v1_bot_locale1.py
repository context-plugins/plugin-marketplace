from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class V1BotLocale1(str, Enum):
    """The locale of the Amazon Lex V1 bot that is the source of the migration."""

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


V1BotLocale1OrStr: TypeAlias = Annotated[V1BotLocale1 | str, open_enum_validator(V1BotLocale1)]
