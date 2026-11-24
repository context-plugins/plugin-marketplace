from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1RazorpayXContactsApi(str, Enum):
    VENDOR = "vendor"
    CUSTOMER = "customer"
    EMPLOYEE = "employee"
    SELF = "self"

    __str__ = str.__str__


Type1RazorpayXContactsApiOrStr: TypeAlias = Annotated[
    Type1RazorpayXContactsApi | str, open_enum_validator(Type1RazorpayXContactsApi)
]
