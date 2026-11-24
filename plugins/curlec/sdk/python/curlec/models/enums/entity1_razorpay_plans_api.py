from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity1RazorpayPlansApi(str, Enum):
    ITEM = "item"

    __str__ = str.__str__


Entity1RazorpayPlansApiOrStr: TypeAlias = Annotated[
    Entity1RazorpayPlansApi | str, open_enum_validator(Entity1RazorpayPlansApi)
]
