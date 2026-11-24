from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayLinkedAccountsApi(str, Enum):
    """Account status."""

    CREATED = "created"
    SUSPENDED = "suspended"

    __str__ = str.__str__


StatusRazorpayLinkedAccountsApiOrStr: TypeAlias = Annotated[
    StatusRazorpayLinkedAccountsApi | str, open_enum_validator(StatusRazorpayLinkedAccountsApi)
]
