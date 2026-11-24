from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JournalEntryStatus(int, Enum):
    """0 = Delete 1 = Awaiting 5 = Approved 9 = Void"""

    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_5 = 5
    VALUE_9 = 9

    __str__ = str.__str__


JournalEntryStatusOrInt: TypeAlias = Annotated[JournalEntryStatus | int, open_enum_validator(JournalEntryStatus)]
