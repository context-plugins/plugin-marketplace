from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeRazorpayXContactsApi(str, Enum):
    """Built-in types only via API; custom types must be created on Dashboard first"""

    VENDOR = "vendor"
    CUSTOMER = "customer"
    EMPLOYEE = "employee"
    SELF = "self"

    __str__ = str.__str__


TypeRazorpayXContactsApiOrStr: TypeAlias = Annotated[
    TypeRazorpayXContactsApi | str, open_enum_validator(TypeRazorpayXContactsApi)
]
