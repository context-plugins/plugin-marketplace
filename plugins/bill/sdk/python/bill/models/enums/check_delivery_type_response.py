from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckDeliveryTypeResponse(str, Enum):
    """Enum for Check delivery type."""

    STANDARD = "STANDARD"
    UPS_1_DAY = "UPS_1DAY"
    UPS_2_DAY = "UPS_2DAY"
    UPS_3_DAY = "UPS_3DAY"
    RTP_DELIVERY = "RTP_DELIVERY"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


CheckDeliveryTypeResponseOrStr: TypeAlias = Annotated[
    CheckDeliveryTypeResponse | str, open_enum_validator(CheckDeliveryTypeResponse)
]
