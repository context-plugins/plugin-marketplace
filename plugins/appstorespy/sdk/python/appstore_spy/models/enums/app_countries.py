from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AppCountries(str, Enum):
    """An enumeration."""

    US = "US"
    CA = "CA"
    AT = "AT"
    BE = "BE"
    CY = "CY"
    CZ = "CZ"
    DK = "DK"
    FI = "FI"
    FR = "FR"
    DE = "DE"
    GR = "GR"
    HU = "HU"
    IE = "IE"
    IT = "IT"
    NL = "NL"
    NO = "NO"
    PL = "PL"
    PT = "PT"
    RU = "RU"
    ES = "ES"
    SE = "SE"
    CH = "CH"
    TR = "TR"
    UA = "UA"
    GB = "GB"
    EG = "EG"
    IN = "IN"
    IL = "IL"
    MA = "MA"
    NG = "NG"
    SA = "SA"
    ZA = "ZA"
    AE = "AE"
    AU = "AU"
    HK = "HK"
    ID = "ID"
    JP = "JP"
    KZ = "KZ"
    KR = "KR"
    MY = "MY"
    NZ = "NZ"
    PK = "PK"
    PH = "PH"
    SG = "SG"
    TW = "TW"
    TH = "TH"
    VN = "VN"
    AR = "AR"
    BR = "BR"
    MX = "MX"

    __str__ = str.__str__


AppCountriesOrStr: TypeAlias = Annotated[AppCountries | str, open_enum_validator(AppCountries)]
