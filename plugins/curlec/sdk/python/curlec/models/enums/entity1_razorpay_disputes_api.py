from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity1RazorpayDisputesApi(str, Enum):
    COLLECTION = "collection"

    __str__ = str.__str__


Entity1RazorpayDisputesApiOrStr: TypeAlias = Annotated[
    Entity1RazorpayDisputesApi | str, open_enum_validator(Entity1RazorpayDisputesApi)
]
