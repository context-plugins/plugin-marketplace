from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TierPriceCurrency(str, Enum):
    USD = "usd"
    AUD = "aud"
    CAD = "cad"
    EUR = "eur"
    GBP = "gbp"
    INR = "inr"
    BRL = "brl"
    MXN = "mxn"
    NZD = "nzd"
    DKK = "dkk"

    __str__ = str.__str__


TierPriceCurrencyOrStr: TypeAlias = Annotated[TierPriceCurrency | str, open_enum_validator(TierPriceCurrency)]
