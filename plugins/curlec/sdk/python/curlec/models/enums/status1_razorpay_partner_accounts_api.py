from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1RazorpayPartnerAccountsApi(str, Enum):
    SUSPENDED = "suspended"

    __str__ = str.__str__


Status1RazorpayPartnerAccountsApiOrStr: TypeAlias = Annotated[
    Status1RazorpayPartnerAccountsApi | str, open_enum_validator(Status1RazorpayPartnerAccountsApi)
]
