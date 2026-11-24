from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Currency(str, Enum):
    """Currency code for monetary values."""

    USD = "USD"
    ILS = "ILS"
    EUR = "EUR"
    AUD = "AUD"
    CAD = "CAD"
    GBP = "GBP"
    DKK = "DKK"
    NOK = "NOK"
    SEK = "SEK"
    BRL = "BRL"
    SGD = "SGD"
    MXN = "MXN"
    CHF = "CHF"
    MYR = "MYR"
    TWD = "TWD"
    EGP = "EGP"
    ZAR = "ZAR"
    JPY = "JPY"
    IDR = "IDR"
    AED = "AED"
    THB = "THB"
    COP = "COP"

    __str__ = str.__str__


CurrencyOrStr: TypeAlias = Annotated[Currency | str, open_enum_validator(Currency)]
