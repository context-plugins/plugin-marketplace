from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribePreferredLanguage(str, Enum):
    EN_US = "en-US"
    EN_GB = "en-GB"
    ES_US = "es-US"
    FR_CA = "fr-CA"
    FR_FR = "fr-FR"
    EN_AU = "en-AU"
    IT_IT = "it-IT"
    DE_DE = "de-DE"
    PT_BR = "pt-BR"

    __str__ = str.__str__


XAmznTranscribePreferredLanguageOrStr: TypeAlias = Annotated[
    XAmznTranscribePreferredLanguage | str, open_enum_validator(XAmznTranscribePreferredLanguage)
]
