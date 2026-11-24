from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayInstantSettlementsApi(str, Enum):
    SETTLEMENT_ONDEMAND = "settlement.ondemand"

    __str__ = str.__str__


EntityRazorpayInstantSettlementsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayInstantSettlementsApi | str, open_enum_validator(EntityRazorpayInstantSettlementsApi)
]
