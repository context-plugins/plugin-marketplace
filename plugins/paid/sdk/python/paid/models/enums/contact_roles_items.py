from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContactRolesItems(str, Enum):
    BILLING = "BILLING"
    ACCOUNTS_PAYABLE = "ACCOUNTS_PAYABLE"

    __str__ = str.__str__


ContactRolesItemsOrStr: TypeAlias = Annotated[ContactRolesItems | str, open_enum_validator(ContactRolesItems)]
