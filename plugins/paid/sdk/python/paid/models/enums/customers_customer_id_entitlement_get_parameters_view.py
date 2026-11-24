from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomersCustomerIdEntitlementGetParametersView(str, Enum):
    ALL = "all"
    ACTIVE_ONLY = "active_only"

    __str__ = str.__str__


CustomersCustomerIdEntitlementGetParametersViewOrStr: TypeAlias = Annotated[
    CustomersCustomerIdEntitlementGetParametersView | str,
    open_enum_validator(CustomersCustomerIdEntitlementGetParametersView),
]
