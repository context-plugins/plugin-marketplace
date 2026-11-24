from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity1RazorpayTransfersApi(str, Enum):
    TRANSFER = "transfer"

    __str__ = str.__str__


Entity1RazorpayTransfersApiOrStr: TypeAlias = Annotated[
    Entity1RazorpayTransfersApi | str, open_enum_validator(Entity1RazorpayTransfersApi)
]
