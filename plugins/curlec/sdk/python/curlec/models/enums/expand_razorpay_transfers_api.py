from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExpandRazorpayTransfersApi(str, Enum):
    RECIPIENT_SETTLEMENT = "recipient_settlement"

    __str__ = str.__str__


ExpandRazorpayTransfersApiOrStr: TypeAlias = Annotated[
    ExpandRazorpayTransfersApi | str, open_enum_validator(ExpandRazorpayTransfersApi)
]
