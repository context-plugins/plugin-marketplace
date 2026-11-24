from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayItemsApi(str, Enum):
    ITEM = "item"

    __str__ = str.__str__


EntityRazorpayItemsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayItemsApi | str, open_enum_validator(EntityRazorpayItemsApi)
]
