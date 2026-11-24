from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AccountOwnership(str, Enum):
    """Value indicating the number of customers that have ownership of the account, according to the data holder's
    definition of account ownership. Does not indicate that all account owners are eligible consumers."""

    UNKNOWN = "UNKNOWN"
    ONE_PARTY = "ONE_PARTY"
    TWO_PARTY = "TWO_PARTY"
    MANY_PARTY = "MANY_PARTY"
    OTHER = "OTHER"

    __str__ = str.__str__


AccountOwnershipOrStr: TypeAlias = Annotated[AccountOwnership | str, open_enum_validator(AccountOwnership)]
