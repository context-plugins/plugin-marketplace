from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckDeliveryTypeRequest(str, Enum):
    """Enum for Check delivery type."""

    STANDARD = "STANDARD"
    UPS_1_DAY = "UPS_1DAY"
    UPS_2_DAY = "UPS_2DAY"
    UPS_3_DAY = "UPS_3DAY"
    RTP_DELIVERY = "RTP_DELIVERY"

    __str__ = str.__str__


CheckDeliveryTypeRequestOrStr: TypeAlias = Annotated[
    CheckDeliveryTypeRequest | str, open_enum_validator(CheckDeliveryTypeRequest)
]
