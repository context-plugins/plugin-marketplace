from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AcceptedOfferPriceStatus(str, Enum):
    FOUND = "found"
    PENDING = "pending"
    NOT_AVAILABLE = "not_available"
    UNKNOWN = "unknown"

    __str__ = str.__str__


AcceptedOfferPriceStatusOrStr: TypeAlias = Annotated[
    AcceptedOfferPriceStatus | str, open_enum_validator(AcceptedOfferPriceStatus)
]
