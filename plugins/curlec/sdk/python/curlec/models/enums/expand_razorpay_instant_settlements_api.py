from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExpandRazorpayInstantSettlementsApi(str, Enum):
    ONDEMAND_PAYOUTS = "ondemand_payouts"

    __str__ = str.__str__


ExpandRazorpayInstantSettlementsApiOrStr: TypeAlias = Annotated[
    ExpandRazorpayInstantSettlementsApi | str, open_enum_validator(ExpandRazorpayInstantSettlementsApi)
]
