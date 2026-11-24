from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayTransfersApi(str, Enum):
    REVERSAL = "reversal"

    __str__ = str.__str__


EntityRazorpayTransfersApiOrStr: TypeAlias = Annotated[
    EntityRazorpayTransfersApi | str, open_enum_validator(EntityRazorpayTransfersApi)
]
