from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderLineType(str, Enum):
    STANDARD = "STANDARD"
    PRORATION_CREDIT = "PRORATION_CREDIT"
    PRORATION_CHARGE = "PRORATION_CHARGE"
    CREDIT = "CREDIT"

    __str__ = str.__str__


OrderLineTypeOrStr: TypeAlias = Annotated[OrderLineType | str, open_enum_validator(OrderLineType)]
