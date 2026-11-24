from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayDisputesApi(str, Enum):
    DISPUTE = "dispute"

    __str__ = str.__str__


EntityRazorpayDisputesApiOrStr: TypeAlias = Annotated[
    EntityRazorpayDisputesApi | str, open_enum_validator(EntityRazorpayDisputesApi)
]
