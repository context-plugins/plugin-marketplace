from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AccountType(str, Enum):
    """The account type"""

    POSTING = "Posting"
    HEADING = "Heading"
    TOTAL = "Total"
    BEGIN_TOTAL = "Begin-Total"
    END_TOTAL = "End-Total"

    __str__ = str.__str__


AccountTypeOrStr: TypeAlias = Annotated[AccountType | str, open_enum_validator(AccountType)]
