from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode5(str, Enum):
    """Provides the language code that you specified in your Call Analytics request."""

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


LanguageCode5OrStr: TypeAlias = Annotated[LanguageCode5 | str, open_enum_validator(LanguageCode5)]
