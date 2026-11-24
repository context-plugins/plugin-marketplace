from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Currency(str, Enum):
    """ISO 4217 currency code for the payment amount. Currently there are 3 possible currency options - depending on the
    country where the store is located:
      - ``AED`` - United Arab Emirates Dirham
      - ``SAR`` - Saudi Riyal
      - ``KWD`` - Kuwaiti Dinar"""

    AED = "AED"
    SAR = "SAR"
    KWD = "KWD"

    __str__ = str.__str__


CurrencyOrStr: TypeAlias = Annotated[Currency | str, open_enum_validator(Currency)]
