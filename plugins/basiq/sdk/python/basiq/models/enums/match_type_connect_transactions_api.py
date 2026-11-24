from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MatchTypeConnectTransactionsApi(str, Enum):
    """Indicates the method used to match a payment transaction with a merchant or business classification code.
    Description for each enum; merchantFull: Indicates an exact match between the transaction and a known merchant in
    the database. merchantPartial: Suggests a partial match with a merchant, usually based on substring or fuzzy logic.
    mcc: Match is done using the Merchant Category Code associated with the transaction. ml: Match is determined through
    machine learning algorithms for classification. none: Match is not found."""

    MERCHANT_FULL = "merchantFull"
    MERCHANT_PARTIAL = "merchantPartial"
    MCC = "mcc"
    ML = "ml"
    NONE = "none"

    __str__ = str.__str__


MatchTypeConnectTransactionsApiOrStr: TypeAlias = Annotated[
    MatchTypeConnectTransactionsApi | str, open_enum_validator(MatchTypeConnectTransactionsApi)
]
