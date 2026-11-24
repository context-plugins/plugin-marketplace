from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayVirtualAccountsApi(str, Enum):
    """active = accepting payments; closed = no longer accepting payments."""

    ACTIVE = "active"
    CLOSED = "closed"

    __str__ = str.__str__


StatusRazorpayVirtualAccountsApiOrStr: TypeAlias = Annotated[
    StatusRazorpayVirtualAccountsApi | str, open_enum_validator(StatusRazorpayVirtualAccountsApi)
]
