from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FulfillmentType(str, Enum):
    """The type of fulfillment for this service option."""

    DELIVERY = "delivery"
    PICKUP = "pickup"
    LAST_MILE = "last_mile"

    __str__ = str.__str__


FulfillmentTypeOrStr: TypeAlias = Annotated[FulfillmentType | str, open_enum_validator(FulfillmentType)]
