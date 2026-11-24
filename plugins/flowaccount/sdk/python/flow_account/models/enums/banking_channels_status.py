from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BankingChannelsStatus(int, Enum):
    """1 = Active 3 = InActive"""

    VALUE_1 = 1
    VALUE_3 = 3

    __str__ = str.__str__


BankingChannelsStatusOrInt: TypeAlias = Annotated[
    BankingChannelsStatus | int, open_enum_validator(BankingChannelsStatus)
]
