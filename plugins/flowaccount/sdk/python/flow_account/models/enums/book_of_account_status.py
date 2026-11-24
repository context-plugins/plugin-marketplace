from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BookOfAccountStatus(int, Enum):
    """0 = Delete 1 = Awaiting 5 = Approved 9 = Void -9 = ResetVoid -5 = ResetApproved -1 = ResetAwaiting"""

    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_5 = 5
    VALUE_9 = 9
    NEGATIVE_9 = -9
    NEGATIVE_5 = -5
    NEGATIVE_1 = -1

    __str__ = str.__str__


BookOfAccountStatusOrInt: TypeAlias = Annotated[BookOfAccountStatus | int, open_enum_validator(BookOfAccountStatus)]
