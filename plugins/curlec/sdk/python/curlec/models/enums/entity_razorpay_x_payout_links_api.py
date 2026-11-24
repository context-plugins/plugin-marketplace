from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayXPayoutLinksApi(str, Enum):
    PAYOUT_LINK = "payout_link"

    __str__ = str.__str__


EntityRazorpayXPayoutLinksApiOrStr: TypeAlias = Annotated[
    EntityRazorpayXPayoutLinksApi | str, open_enum_validator(EntityRazorpayXPayoutLinksApi)
]
