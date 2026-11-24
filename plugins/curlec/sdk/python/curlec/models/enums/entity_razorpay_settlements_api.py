from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpaySettlementsApi(str, Enum):
    SETTLEMENT = "settlement"

    __str__ = str.__str__


EntityRazorpaySettlementsApiOrStr: TypeAlias = Annotated[
    EntityRazorpaySettlementsApi | str, open_enum_validator(EntityRazorpaySettlementsApi)
]
