from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity1RazorpayOrdersApi(str, Enum):
    PAYMENT = "payment"

    __str__ = str.__str__


Entity1RazorpayOrdersApiOrStr: TypeAlias = Annotated[
    Entity1RazorpayOrdersApi | str, open_enum_validator(Entity1RazorpayOrdersApi)
]
