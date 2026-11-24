from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateContactRequestRolesItems(str, Enum):
    BILLING = "BILLING"
    ACCOUNTS_PAYABLE = "ACCOUNTS_PAYABLE"

    __str__ = str.__str__


CreateContactRequestRolesItemsOrStr: TypeAlias = Annotated[
    CreateContactRequestRolesItems | str, open_enum_validator(CreateContactRequestRolesItems)
]
