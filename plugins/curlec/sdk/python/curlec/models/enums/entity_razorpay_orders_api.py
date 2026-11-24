from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayOrdersApi(str, Enum):
    ORDER = "order"

    __str__ = str.__str__


EntityRazorpayOrdersApiOrStr: TypeAlias = Annotated[
    EntityRazorpayOrdersApi | str, open_enum_validator(EntityRazorpayOrdersApi)
]
