from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UpdateContactRequestRolesItems(str, Enum):
    BILLING = "BILLING"
    ACCOUNTS_PAYABLE = "ACCOUNTS_PAYABLE"

    __str__ = str.__str__


UpdateContactRequestRolesItemsOrStr: TypeAlias = Annotated[
    UpdateContactRequestRolesItems | str, open_enum_validator(UpdateContactRequestRolesItems)
]
