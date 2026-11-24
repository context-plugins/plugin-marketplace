from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LocaleAmazonLexModelBuildingV2VersionsApi(str, Enum):
    """The target locale for the bot."""

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


LocaleAmazonLexModelBuildingV2VersionsApiOrStr: TypeAlias = Annotated[
    LocaleAmazonLexModelBuildingV2VersionsApi | str, open_enum_validator(LocaleAmazonLexModelBuildingV2VersionsApi)
]
