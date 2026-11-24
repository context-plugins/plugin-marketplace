from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VirtualCardStatus(str, Enum):
    """Virtual Card Status enum."""

    UNDEFINED = "UNDEFINED"
    OPEN = "OPEN"
    PENDING = "PENDING"
    REQUIRE_MORE_INFO = "REQUIRE_MORE_INFO"
    PAY_FOR_YOUR_OPPORTUNITY = "PAY_FOR_YOUR_OPPORTUNITY"
    PHONE_NUMBER_NEEDED = "PHONE_NUMBER_NEEDED"
    ENROLLED = "ENROLLED"
    DECLINED = "DECLINED"
    CONFIRMED = "CONFIRMED"
    RECRUITING = "RECRUITING"
    VERBAL_COMMITMENT = "VERBAL_COMMITMENT"
    PAYER_ASSIST = "PAYER_ASSIST"
    ON_HOLD = "ON_HOLD"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


VirtualCardStatusOrStr: TypeAlias = Annotated[VirtualCardStatus | str, open_enum_validator(VirtualCardStatus)]
