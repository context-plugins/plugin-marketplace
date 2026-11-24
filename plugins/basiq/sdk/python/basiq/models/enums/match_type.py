from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MatchType(str, Enum):
    """Indicates the method used to match a payment transaction with a merchant or business classification code."""

    MERCHANT_FULL = "merchantFull"
    MERCHANT_PARTIAL = "merchantPartial"
    MCC = "mcc"
    ML = "ml"

    __str__ = str.__str__


MatchTypeOrStr: TypeAlias = Annotated[MatchType | str, open_enum_validator(MatchType)]
