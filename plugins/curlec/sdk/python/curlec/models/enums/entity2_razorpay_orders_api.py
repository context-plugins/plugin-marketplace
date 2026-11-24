from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity2RazorpayOrdersApi(str, Enum):
    COLLECTION = "collection"

    __str__ = str.__str__


Entity2RazorpayOrdersApiOrStr: TypeAlias = Annotated[
    Entity2RazorpayOrdersApi | str, open_enum_validator(Entity2RazorpayOrdersApi)
]
