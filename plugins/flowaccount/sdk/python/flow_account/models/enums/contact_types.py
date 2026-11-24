from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContactTypes(int, Enum):
    """0 = OwnCompany 3 = Client 5 = Vendor 7 = VendorAndClient 9 = ExpenseVendor"""

    VALUE_0 = 0
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9

    __str__ = str.__str__


ContactTypesOrInt: TypeAlias = Annotated[ContactTypes | int, open_enum_validator(ContactTypes)]
