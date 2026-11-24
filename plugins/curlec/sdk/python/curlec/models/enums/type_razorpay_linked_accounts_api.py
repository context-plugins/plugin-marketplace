from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeRazorpayLinkedAccountsApi(str, Enum):
    """Account type. Always 'route' for Route marketplace accounts."""

    ROUTE = "route"

    __str__ = str.__str__


TypeRazorpayLinkedAccountsApiOrStr: TypeAlias = Annotated[
    TypeRazorpayLinkedAccountsApi | str, open_enum_validator(TypeRazorpayLinkedAccountsApi)
]
