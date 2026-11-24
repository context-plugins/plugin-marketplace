from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BusinessTypeRazorpayLinkedAccountsApi(str, Enum):
    """Business type. Cannot be updated after creation."""

    ROUTE = "route"

    __str__ = str.__str__


BusinessTypeRazorpayLinkedAccountsApiOrStr: TypeAlias = Annotated[
    BusinessTypeRazorpayLinkedAccountsApi | str, open_enum_validator(BusinessTypeRazorpayLinkedAccountsApi)
]
